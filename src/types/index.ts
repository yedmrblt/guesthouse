export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export interface ITripItem {
  title: string;
  summary: String;
  images: { src: string; alt: string }[];
}
