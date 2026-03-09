import { useState, useRef } from "react";

/* ─── Asset constants ──────────────────────────────────────────────── */
const articleImage1 =
  "http://localhost:3845/assets/8cbb451e777177f14f6d37ad7f6b4769729f8bdd.png";
const amyImage =
  "http://localhost:3845/assets/3414100027211291c7c446b61afc092a3e863db9.png";
const articleImage3 =
  "http://localhost:3845/assets/71dad5477b1a7c39edd9dd97a0738537a5aeadbf.png";

/* Content panel background SVG (white rect) */
const contentPanelBg =
  "http://localhost:3845/assets/07922004df14e919869be506390bc98ddc86cbb6.svg";

/* Arrow icon: circle bg + diagonal arrow layered on top */
const arrowCircle =
  "http://localhost:3845/assets/bc69fc0a36e80fd484fa8c7573dca358fd8d3c15.svg";
const arrowDiagonal =
  "http://localhost:3845/assets/1b604c4a84c291f801fca1f510476128cb52290b.svg";

/* Corner bracket decoration (at image/content boundary) */
const cornerBracket =
  "http://localhost:3845/assets/68c95de2ebed80f06763d04336091af541d66482.svg";

/* Navigation buttons — separate SVG assets for prev/next */
const navPrev =
  "http://localhost:3845/assets/2f212ed4f0b3aed3cdebecb6cf437894d5cf77ad.svg";
const navNext =
  "http://localhost:3845/assets/d20fbbecc93aff506b3e10c0dad06f2bd711b4b7.svg";

/* ─── Types ────────────────────────────────────────────────────────── */
interface InsightPost {
  id: string;
  title: string;
  excerpt: JSX.Element | string;
  image: string;
  href: string;
  titleTop: number;   // px from card top
  excerptTop: number; // px from card top
}

/* ─── Data ─────────────────────────────────────────────────────────── */
const posts: InsightPost[] = [
  {
    id: "supply-chains",
    title: "Building Innovative Mineral Supply Chains",
    excerpt:
      "Critical minerals are a cornerstone of innovation. Access to these materials enables innovators and entrepreneurs to develop and scale the technologies that underpin AI, energy, biotech, and defense. Domestic supply chains...",
    image: articleImage1,
    href: "#",
    titleTop: 120,
    excerptTop: 179,
  },
  {
    id: "welcoming-amy",
    title: "Welcoming Amy to the Team",
    excerpt: (
      <>
        <a
          href="https://www.linkedin.com/in/amy-engelsen-21a216186/"
          style={{ color: "inherit" }}
        >
          Amy
        </a>{" "}
        joins us with deep expertise in critical minerals and supply chain
        leadership, most recently overseeing rare earth and manganese commodities
        at <span>Ford Motor Company</span>.
      </>
    ),
    image: amyImage,
    href: "#",
    titleTop: 151,
    excerptTop: 210,
  },
  {
    id: "new-partner",
    title: "New Partner",
    excerpt: (
      <>
        Exciting development for our supply chain partner,{" "}
        <a
          href="https://www.linkedin.com/company/reelementtech/"
          style={{ color: "inherit" }}
        >
          ReElement Technologies
        </a>
        . Congrats to them and Posco on the progress!
      </>
    ),
    image: articleImage3,
    href: "#",
    titleTop: 234,
    excerptTop: 268,
  },
];

const CARD_WIDTH = 836; /* 418px image + 418px content */
const CARD_GAP = 40;

/* ─── Component ────────────────────────────────────────────────────── */
export default function InsightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(posts.length - 1, index));
    setCurrentIndex(clamped);
    trackRef.current?.scrollTo({
      left: clamped * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      {/* ── Scrollable card track ─────────────────────────────────── */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: `${CARD_GAP}px`,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              flex: `0 0 ${CARD_WIDTH}px`,
              scrollSnapAlign: "start",
              height: "418px",
              position: "relative",
              display: "flex",
            }}
          >
            {/* ── Left: 418×418 photo ──────────────────────────────── */}
            <div
              style={{
                width: "418px",
                height: "418px",
                flexShrink: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* ── Right: 418×418 content panel ─────────────────────── */}
            <div
              style={{
                width: "418px",
                height: "418px",
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background rectangle SVG */}
              <img
                src={contentPanelBg}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              />

              {/* Arrow icon — circle + diagonal arrow layered */}
              <a
                href={post.href}
                aria-label={`Read: ${post.title}`}
                style={{
                  position: "absolute",
                  top: "29px",
                  right: "29px",
                  width: "40px",
                  height: "40px",
                  display: "block",
                }}
              >
                {/* Outer circle */}
                <img
                  src={arrowCircle}
                  alt=""
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "40px",
                    height: "40px",
                  }}
                />
                {/* Inner diagonal arrow — inset 12.47px / 12.66px */}
                <img
                  src={arrowDiagonal}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "12.66px",
                    left: "12.47px",
                    width: "15px",
                    height: "15px",
                  }}
                />
              </a>

              {/* Title — absolute at Figma-spec position */}
              <h3
                style={{
                  position: "absolute",
                  top: `${post.titleTop}px`,
                  left: "37px",
                  width: "354px",
                  fontFamily: "var(--font-headings)",
                  fontWeight: 800,
                  fontSize: "var(--text-subhead)",
                  color: "var(--color-keystone)",
                  textTransform: "uppercase",
                  lineHeight: "var(--leading-headline-md)",
                  margin: 0,
                  paddingRight: "0",
                }}
              >
                {post.title}
              </h3>

              {/* Excerpt — absolute at Figma-spec position */}
              <p
                style={{
                  position: "absolute",
                  top: `${post.excerptTop}px`,
                  left: "37px",
                  width: "350px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "var(--text-body-lg)",
                  color: "#75757a",
                  lineHeight: "var(--leading-body)",
                  letterSpacing: "0.6px",
                  margin: 0,
                }}
              >
                {post.excerpt}
              </p>
            </div>

            {/* ── Corner bracket — at image/content boundary ────────── */}
            {/* Positioned at left: 392px (25px inside right edge of image) */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "392px",
                top: "179px",
                width: "26px",
                height: "60.565px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  transform: "rotate(90deg)",
                  width: "60.565px",
                  height: "26px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={cornerBracket}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Navigation controls ───────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {/* Prev — standalone SVG asset */}
        <button
          type="button"
          aria-label="Previous insight"
          onClick={() => scrollTo(currentIndex - 1)}
          style={{
            width: "63px",
            height: "63px",
            padding: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <img src={navPrev} alt="" style={{ width: "63px", height: "63px" }} />
        </button>

        {/* Next — standalone SVG asset */}
        <button
          type="button"
          aria-label="Next insight"
          onClick={() => scrollTo(currentIndex + 1)}
          style={{
            width: "63px",
            height: "63px",
            padding: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <img src={navNext} alt="" style={{ width: "63px", height: "63px" }} />
        </button>

        {/* CTA button */}
        <a href="/insights" className="btn btn-secondary">
          View all insights
        </a>
      </div>
    </div>
  );
}
