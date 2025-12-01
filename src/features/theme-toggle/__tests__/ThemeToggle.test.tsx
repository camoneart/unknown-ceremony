import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import ThemeToggle from '../components/theme-toggle/ThemeToggle';
import { useTheme } from 'next-themes';

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle', () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('マウントされるまではスケルトン（無効なボタン）が表示されること', () => {
    // useStateの初期値はfalse。
    // useEffectが実行される前（または完了する前）の状態を検証したい。
    // しかし、testing-libraryのrenderはuseEffectをトリガーする。
    // ここでは、useEffect内のsetMountedが呼ばれる前の状態をシミュレートするため、
    // コンポーネントの初期状態が正しくスケルトンを返すかを確認する。

    // Reactの動作として、初回レンダー時はmounted=falseである。
    // actを使わずにrenderして、即座に確認すればスケルトンが見える可能性があるが、
    // 確実なのは「mountedがfalseの時」の挙動を信じること。

    // ここでは、あえてuseEffectをモックして、setMountedが呼ばれないようにすることで
    // 初期状態（mounted=false）を維持してテストする。
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});

    const { container } = render(<ThemeToggle />);

    // aria-hidden="true"がついているため、getByRole('button')では見つからない可能性がある
    // そのため、DOM要素を直接探す
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-hidden', 'true');
    // クラス名のチェックはCSSモジュールなので難しいが、構造でチェック
    // skeletonクラスを持つspanがあるか
    // CSSモジュールのクラス名は変換されるので、data-testidを使うか、
    // 単にdisabledであることを確認するだけでも十分要件は満たせる。
  });

  it('ライトモードの時、ダークモードへの切り替えボタンが表示されること', async () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });

    await act(async () => {
      render(<ThemeToggle />);
    });

    const button = screen.getByRole('button', { name: 'テーマ切り替え' });
    expect(button).toBeInTheDocument();
    // ライトモード時は「月（ダークモードへ）」のアイコンが出る想定だが、
    // SVGの中身までは厳密に見なくても、クリック時の挙動をテストできれば良い。
  });

  it('ボタンをクリックするとテーマが切り替わること（Light -> Dark）', async () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
    });

    await act(async () => {
      render(<ThemeToggle />);
    });

    const button = screen.getByRole('button', { name: 'テーマ切り替え' });
    fireEvent.click(button);

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('ボタンをクリックするとテーマが切り替わること（Dark -> Light）', async () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: mockSetTheme,
    });

    await act(async () => {
      render(<ThemeToggle />);
    });

    const button = screen.getByRole('button', { name: 'テーマ切り替え' });
    fireEvent.click(button);

    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
