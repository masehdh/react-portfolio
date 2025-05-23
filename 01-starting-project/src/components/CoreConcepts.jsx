import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  const children = (
    <ul>
      {CORE_CONCEPTS.map((conceptItem) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  );

  return (
    <Section id="core-concepts" title="Core Concepts">
      {children}
    </Section>
  );
}
