import { pageMetadata } from '@/config/metadata';

export const metadata = pageMetadata.about;

const AboutPage = () => {
  return (
    <div
      className="h-full grid place-content-center gap-[35px] pb-[40px]"
      style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
    >
      <div className='max-w-[580px] grid gap-[35px] text-center'>
        <section className="grid gap-[15px]">
          <h2 className="text-[24px] tracking-[0.2em]">CONCEPT</h2>
          <div className="grid gap-[15px]">
            <p className="text-[16px] font-bold leading-relaxed">
              &quot;無名な作品をWebという大きな会場にて披露する式典&quot;
            </p>
            <div className="leading-[1.75] grid gap-[10px]">
              <p>有名無名は関係ない。無名が存在するから有名も存在する。</p>
              <p>無名な私が制作した作品もまた無名。</p>
              <p>それでもその作品一つ一つは私にとっては &quot;主役&quot; だったりするのです。</p>
              <p>だからこそ、作品一つ一つに &quot;式&quot; を挙げてやりたい。</p>
              <p>そんな想いを込め、&quot;UNKNOWN CEREMONY&quot; と名付けました。</p>
            </div>
          </div>
        </section>

        <section className="grid gap-[15px]">
          <h2 className="text-[24px] tracking-[0.2em]">ABOUT</h2>
          <p className="leading-[1.75]">
            ただただひたすらモノづくりが好きな私が制作した作品を披露する場となっています。
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
