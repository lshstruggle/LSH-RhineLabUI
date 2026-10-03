// One shared mark for the interface and the printed archive label.
// The small LSH monogram is deliberately secondary so the original infinity
// silhouette remains the first thing people recognize.
const paths = `<path d="M156 75C127 48 103 15 70 15C37 15 15 39 15 70S38 128 70 128C103 128 127 96 176 52M155 75C182 99 208 128 240 128C273 128 295 105 295 73S273 15 240 15C221 15 207 23 192 38" fill="none" stroke="currentColor" stroke-width="26"/><path d="M44 70h50M69 45v50M219 70h44" fill="none" stroke="currentColor" stroke-width="15"/>`;
const lsh = `<text data-lsh-mark="true" x="155" y="148" text-anchor="middle" font-family="MiSans,sans-serif" font-size="10" font-weight="700" letter-spacing="4">LSH</text>`;
export const labelMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 155" color="#171713" role="img" aria-label="莱茵生命标志，含 LSH 字母标记">${paths}${lsh}</svg>`;
export const logo = `<svg viewBox="0 0 310 185" aria-label="莱茵生命标志，含 LSH 字母标记" role="img">${paths}${lsh}<text data-boot-letters="true" x="155" y="174" text-anchor="middle" font-family="MiSans,sans-serif" font-size="16" font-weight="700" letter-spacing="11">莱茵·生命</text></svg>`;
// The same Bezier contour, continuous for the opening's moving draw/erase ends.
// Its small printed gap is animated with stroke dashes, not baked into the path.
export const bootMarkContour =
  "M295 73C295 41 273 15 240 15C221 15 207 23 192 38C186 43 181 47 176 52C127 96 103 128 70 128C38 128 15 101 15 70C15 39 37 15 70 15C103 15 127 48 156 75C182 99 208 128 240 128C273 128 295 105 295 73Z";

// Optical spacing for this fixed wordmark, measured from the reference glyphs.
const analysisPositions = [2, 56];
export const brandHeading = `<h1>莱茵生命</h1><div>信息综合终端</div><p><span class="brand-analysis" role="img" aria-label="分析">${[..."分析"].map((letter, i) => `<span aria-hidden="true" style="left:${analysisPositions[i]}px">${letter}</span>`).join("")}</span> <b>系统</b></p>`;
