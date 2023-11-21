export interface ProjectInfo {
  id: string;
  properties: {
    이름: { id: string; type: string; title: { plain_text: string }[] };
    설명: { id: string; type: string; rich_text: { plain_text: string }[] };
    날짜: {
      id: string;
      type: string;
      date: { start: Date | null; end: Date | null };
    };
    태그: {
      id: string;
      type: string;
      multi_select: { id: string; name: string; color: string }[];
    };
    GitHub: {
      id: string;
      type: string;
      rich_text: { href: string }[];
    };
    URL: {
      id: string;
      type: string;
      url: string;
    };
  };
  url: string;
  cover: { type: string; file: { url: string }; external: { url: string } };
}
