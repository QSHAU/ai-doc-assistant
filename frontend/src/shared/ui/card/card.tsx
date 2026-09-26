import type { ReactNode } from "react";
import "./card.css";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export const Card = ({ title, children }: CardProps) => (
  <section className="card">
    {title && <h1 className="card-title">{title}</h1>}
    {children}
  </section>
);
