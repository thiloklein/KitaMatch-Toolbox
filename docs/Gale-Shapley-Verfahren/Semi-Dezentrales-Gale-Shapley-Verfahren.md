---
layout: default
title: Semidezentrales Gale-Shapley-Verfahren
parent: Das Gale-Shapley Verfahren
nav_order: 2
permalink: /docs/Gale-Shapley-Verfahren/Semi-Dezentrales-Gale-Shapley-Verfahren
---

# Semidezentrales Gale-Shapley-Verfahren für KitaMatch

Das Gale-Shapley-Verfahren ist ein von David Gale und Lloyd Shapley entwickeltes Zuteilungsverfahren (Gale and Shapley 1962). Die Autoren beschrieben, wie mithilfe dieses Verfahrens eine stabile Zuteilung von Schüler:innen auf Schulen erreicht werden kann. Das ZEW - Leibniz-Zentrum für Europäische Wirtschaftsforschung hat in Kooperation mit dem Deutschen Städtetag, dem Landesjugendamt Baden-Württemberg und mehreren Kommunen in Nordrhein-Westfalen und Rheinland-Pfalz dieses Verfahren unter Berücksichtigung von praktischen Problemen auf die koordinierte Vergabe von Kitaplätzen angepasst.

Im Folgenden wird das Gale-Shapley-Verfahren ohne spezifische Anpassungen beschrieben. Grundsätzlich lässt sich sein Mechanismus relativ einfach auf komplexere Situationen — zum Beispiel Kitas mit unterschiedlichen Betreuungsplätzen bedingt durch Betreuungsumfänge und Alterskategorien anpassen. 

**Zentrale Durchführung**: Normalerweise wird das Gale-Shapley Verfahren zentral durchgeführt. Das heißt Prioritäten der Kitas und die Präferenzen bzw. Rankings der Bewerber werden zentral gesammelt und anschließend wird mittels des Gale-Shapley-Verfahrens die Zuteilung direkt ermittelt. Dies ist jedoch nicht immer optimal, da beispielsweise die Trägerautonomie einschränkt wird, weil Kitas zu keiner Zeit von den festgelegten Prioritäten abweichen können. 

**Semizentrale Durchführung**: Die koordinierte Vergabe von Kitaplätzen wird semizentral durchgeführt. In diesem Fall werden die Präferenzen bzw. Rankings der Bewerber zentral gesammelt, aber die Kitas nehmen dezentralisiert an der Vergabe teil, das heißt sie durchlaufen jeden Schritt der Vergabe einzeln. Dadurch ergibt sich die Möglichkeit, gegebenenfalls vom vorgegebenen Kriterienkatalog abzuweichen.  

{: .note-title}
> Tipp:
>
> Für ein einfaches Beispiel des Gale-Shapley-Verfahrens — im Vergleich mit den herkömmlichen Verfahren — siehe <a href="/docs/Gale-Shapley-Verfahren/Gale-Shapley-Beispiel">Beispiel: Gale-Shapley Verfahren</a>, <a href="/docs/Gale-Shapley-Verfahren/First-Preference-First-Mechanismus">Beispiel: First-Preference-First Mechanismus</a> und <a href="/docs/Gale-Shapley-Verfahren/Unkoordiniertes-Verfahren">Beispiel: Unkoordiniertes Verfahren</a>

  
---   
  
## Zentrales Gale-Shapley-Verfahren:

**Schritt 1**.

  1. **Kitaangebote**: 
     
     Kitas machen innerhalb der Matching-Software für jeden ihrer Plätze ein Angebot an einen Bewerber — und zwar beginnend mit den höchst priorisierten der Reihe nach folgend.
  
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

  1. Gemäß ihrer vorsortierten Liste machen Kitas innerhalb der Matching-Software  für jeden ihrer Plätze ein Angebot an einen Bewerber — und zwar generell beginnend mit den höchst priorisierten der Reihe nach folgend. 

     **Dezentral: Aufgrund der semidezentralen Natur des Verfahrens haben Kitas jedoch die Flexibilität, bei Bedarf von dem Kriterienkatalog/Prioritäten abzuweichen.**

     **Wichtig: Weicht eine Kita vom Kriterienkatalog ab, sollte dies begründet werden.** 
  
  2. Bewerber nehmen automatisch innerhalb der Matching-Software ein Angebot vorläufig an und geben den anderen Kitas, die ihnen in dieser Runde ein Angebot gemacht haben, eine definitive Absage. 
    
     **Zentralisiert: Dies geschieht automatisch  über die hinterlegten Präferenzen.**
 
**Alle weiteren Schritte (2, 3, 4, …)**.

  1. Kitas, die mindestens eine Absage erhalten haben,  machen ein neues Angebot pro Absage  Kitas, bei denen kein einziges Angebot abgelehnt worden ist, machen kein weiteres Angebot. 

     **Dezentral: Auch in jedem dieser Schritte können Kitas bei Bedarf von dem Kriterienkatalog/Prioritäten abweichen.**
  
  2. Bewerber, die zusätzlich Angebote erhalten, können entweder ein neues Angebot vorläufig annehmen oder ihr derzeit gehaltenes Angebot beibehalten. Dann erteilen sie allen anderen Kitas eine definitive Absage. 

     **Zentralisiert: Dies geschieht automatisch über die hinterlegten Präferenzen.**

  3. Falls kein einziges neues Angebot gemacht wurde, ist eine finale Zuteilung erreicht: Bewerber haben einen Kitaplatz bei der Kita, deren Angebot sie halten. Bewerber, die kein Angebot halten, bleiben zunächst unversorgt.


