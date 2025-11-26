## ディレクトリ構成

本プロジェクトでは、Next.jsにおけるContainer/Presentationalパターンに基づき、以下のディレクトリ設計ルールを採用します。

### 基本方針

- Route Segmentごとに機能をコロケーションする
- UIロジック（データ取得など）と表示ロジックを分離する
- 外部に公開するエンドポイントを明確にする

### ディレクトリ構成ルール

各Route Segment配下に`_containers`ディレクトリを作成し、機能ごとに以下の構成を持つディレクトリを配置してください：

```
<route>/
  _containers/
    <container name>/
      index.tsx              // Public API（container.tsxをre-export）
      container.tsx          // データ取得などのServer処理
      presentational.tsx     // UIを定義（内部実装）
```

### importルール

- 外部から参照できるのは`index.tsx`のみとします
- `container.tsx`や`presentational.tsx`を直接importしてはいけません

✅ OK:

```ts
import { PostContainer } from './_containers/post';
```

❌ NG:

```ts
import { PostContainer } from './_containers/post/container';
```

### 意図

この構成により以下を保証します：

- コロケーションの成立
- Public/Private境界の明確化
- Container内部の変更が外部に波及しない設計
- RSCのバンドル境界維持
- 保守性・再利用性の向上

### lintルール

Container内部のprivateファイルが外部から参照されないよう、
eslint-plugin-import-access の適用を必須とします（presentational.tsx等の直接importを禁止）

## トップダウン設計

本プロジェクトでは、Next.jsの推奨するUI設計思想に基づき、以下のトップダウン設計フローを必須とします。

### 基本方針

- ページやレイアウトはUIツリーとして設計する
- 大枠（ページ構造）から実装を開始し、徐々に詳細化する
- データフェッチ位置とServer/Client境界を早期に確定させる

### 実装フロー

1. UIをツリーとして分解する（ページ構造の設計）
2. コンポーネントツリーを仮実装する（Containerを配置）
3. 各コンポーネントの詳細実装を行う
   - Server Components（Container）を実装
   - Shared/Client Components（Presentational）を実装

### 守るべきルール

- いきなりPresentationalや細かいUI実装から始めない
- データフェッチはContainerに集約する
- Server ComponentのClient化を安易に行わない
- Container単位でコロケーションする

### 意図

この設計手法により以下を保証します：

- データフェッチコロケーションの成立
- Compositionパターンの適用容易性
- Client Bundle肥大化の防止
- 手戻りの最小化
- RSC設計の破綻防止
