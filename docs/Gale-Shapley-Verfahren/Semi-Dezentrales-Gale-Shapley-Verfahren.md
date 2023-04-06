---
layout: default
title: Semidezentrales Gale-Shapley-Verfahren
parent: Gale-Shapley Verfahren
nav_order: 2
permalink: /docs/Gale-Shapley-Verfahren/Semi-Dezentrales-Gale-Shapley-Verfahren
---

# Gale-Shapley-Verfahren: Stabil und Strategie-Sicher

Das Gale-Shapley-Verfahren ist ein von David Gale und Lloyd Shapley entwickeltes Zuteilungsverfahren (Gale and Shapley 1962). Das Gale-Shapley-Verfahren ist das einzige Vergabeverfahren, welches sowohl stabil als auch strategie-sicher ist.[^1]

{: .note-title}
> Hinweis:
>
> Für ein einfaches Beispiel des Gale-Shapley-Verfahrens — im Vergleich mit den herkömmlichen Verfahren — siehe <a href="/docs/Gale-Shapley-Verfahren/Gale-Shapley-Beispiel">Beispiel: Gale-Shapley Verfahren</a>, <a href="/docs/Gale-Shapley-Verfahren/First-Preference-First-Mechanismus">Beispiel: First-Preference-First Mechanismus</a> und <a href="/docs/Gale-Shapley-Verfahren/Unkoordiniertes-Verfahren">Beispiel: Unkoordiniertes Verfahren</a>. In diesem Kapitel wird außerdem aufgezeigt dass die alternativen Vergabeverfahren nicht Stabil und\oder Strategie-Sicher sind.  

Im Folgenden wird das Gale-Shapley-Verfahren ohne spezifische Anpassungen beschrieben. Grundsätzlich lässt sich sein Mechanismus relativ einfach auf komplexere Situationen — zum Beispiel Kitas mit unterschiedlichen Betreuungsplätzen bedingt durch Betreuungsumfänge und Alterskategorien anpassen. 

**Zentrale Durchführung**: Normalerweise wird das Gale-Shapley Verfahren zentral durchgeführt. Das heißt, Prioritäten der Kitas und die Präferenzen bzw. Rankings der Bewerber werden zentral gesammelt und anschließend wird mittels des Gale-Shapley-Verfahrens die Zuteilung direkt ermittelt. Dies ist jedoch nicht immer optimal, da beispielsweise die Trägerautonomie einschränkt wird, weil Kitas zu keiner Zeit von den festgelegten Prioritäten abweichen können. 

**Semizentrale Durchführung**: Die koordinierte Vergabe von Kitaplätzen wird semizentral durchgeführt. In diesem Fall werden die Präferenzen bzw. Rankings der Bewerber zentral gesammelt, aber die Kitas nehmen dezentralisiert an der Vergabe teil, das heißt sie durchlaufen jeden Schritt der Vergabe einzeln. Dadurch ergibt sich die Möglichkeit, gegebenenfalls vom vorgegebenen Kriterienkatalog abzuweichen.  



  
---   
  
## Zentrales Gale-Shapley-Verfahren:

**Schritt 1**.

  1. **Kitaangebote**: 
     
     Kitas machen innerhalb der Matching-Software für jeden ihrer Plätze ein Angebot an einen Bewerber — und zwar der Reihe nach folgend beginnend mit den höchst priorisierten.
  
  2. **Bewerberannahmen**: 
     
     Bewerber, die mindestens ein Angebot erhalten haben,  nehmen das beste Angebot automatisch innerhalb der Matching-Software vorläufig an und geben den anderen Kitas, die ihnen in dieser Runde ebenfalls ein Angebot gemacht haben, eine definitive Absage. 

**Alle weiteren Schritte (2, 3, 4, …):**

  1. **Kitaangebote**: 
     
     Kitas, die mindestens eine Absage erhalten haben, machen ein neues Angebot pro Absage - außer sie haben keine Bewerber mehr, denen sie ein Angebot unterbreiten möchten. Kitas, bei denen kein einziges Angebot abgelehnt worden ist, machen kein weiteres Angebot.
  
  2. **Bewerberannahmen**: 
     
     Bewerber, die zusätzliche Angebote erhalten, können entweder ein neues Angebot vorläufig annehmen oder ihr derzeit gehaltenes Angebot beibehalten. Danach erteilen sie allen anderen Kitas, die ihnen in dieser Runde ein Angebot gemacht haben,  eine definitive Absage.
  
  3. **Ende**: 
     
     Falls kein einziges neues Angebot gemacht wurde, ist eine finale Zuteilung erreicht. Bewerber haben einen Kitaplatz bei der Kita, deren Angebot sie zuletzt vorläufig gehalten haben — vorläufige Annahmen werden jetzt zu definitiven Annahmen. Bewerber, die kein Angebot halten, gehen leer aus.
 
 
---

## Semizentrales Gale-Shapley-Verfahren:

**Schritt 1**.

  1. Gemäß ihrer vorsortierten Liste machen Kitas innerhalb der Matching-Software  für jeden ihrer Plätze ein Angebot an einen Bewerber — und zwar der Reihe nach folgend generell beginnend mit den höchst priorisierten. 

     **Dezentral: Aufgrund der semidezentralen Natur des Verfahrens haben Kitas jedoch die Flexibilität, bei Bedarf von dem Kriterienkatalog/Prioritäten abzuweichen.**

     **Wichtig: Weicht eine Kita vom Kriterienkatalog ab, sollte dies begründet werden.** 
  
  2. Bewerber nehmen automatisch innerhalb der Matching-Software ein Angebot vorläufig an und geben den anderen Kitas, die ihnen in dieser Runde ein Angebot gemacht haben, eine definitive Absage. 
    
     **Zentralisiert: Dies geschieht automatisch  über die hinterlegten Präferenzen.**
 
**Alle weiteren Schritte (2, 3, 4, …)**:

  1. Kitas, die mindestens eine Absage erhalten haben,  machen ein neues Angebot pro Absage  Kitas, bei denen kein einziges Angebot abgelehnt worden ist, machen kein weiteres Angebot. 

     **Dezentral: Auch in jedem dieser Schritte können Kitas bei Bedarf von dem Kriterienkatalog/Prioritäten abweichen.**
  
  2. Bewerber, die zusätzlich Angebote erhalten, können entweder ein neues Angebot vorläufig annehmen oder ihr derzeit gehaltenes Angebot beibehalten. Dann erteilen sie allen anderen Kitas eine definitive Absage. 

     **Zentralisiert: Dies geschieht automatisch über die hinterlegten Präferenzen.**

  3. Falls kein einziges neues Angebot gemacht wurde, ist eine finale Zuteilung erreicht: Bewerber haben einen Kitaplatz bei der Kita, deren Angebot sie halten. Bewerber, die kein Angebot halten, bleiben zunächst unversorgt.



---

[^1]: Das Gale-Shapley-Verfahren, bei welchem Kitas Angebote unterbreiten, ist immun gegen Änderungen der Rankingliste, aber nicht gegen deren Verkürzen. In der Praxis ist aber das Risiko durch Verkürzens der Rangliste keiner Kita zugeteilt zu werden, viel höher als der potenzielle Gewinn bei einer erfolgreichen Manipulation. So gesehen ist für Bewerber in jedem Fall von Vorteil, ihre Präferenzen/Rankings wahrheitsgetreu anzugeben. Das Gale-Shapley-Verfahren, bei welchem Eltern Angebote unterbreiten, ist komplett strategy-sicher.

