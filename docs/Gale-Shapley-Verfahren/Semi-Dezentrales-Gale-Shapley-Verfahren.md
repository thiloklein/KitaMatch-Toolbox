---
layout: default
title: Semi-Dezentrales Gale-Shapley Verfahren
parent: Das Gale-Shapley Verfahren
nav_order: 2
permalink: /docs/Gale-Shapley-Verfahren/Semi-Dezentrales-Gale-Shapley-Verfahren
---

# Semi-Dezentrales Gale-Shapley Verfahren für KitaMatch

Das Gale-Shapley Verfahren ist ein von David Gale und Lloyd Shapley entwickeltes Zuteilungsverfahren (Gale and Shapley, 1962). Die Autoren beschrieben, wie mit Hilfe dieses Verfahrens eine stabile Zuteilung von Schülern auf Schulen erreicht werden kann. Das ZEW hat in Kooperation mit dem deutschen Städtetag, dem Landesjugendamt Baden-Württemberg und mehreren Kommunen in Nordrhein-Westfalen und Rheinland-Pfalz das Gale-Shapley Verfahren unter Berücksichtigung von praktischen Problemen auf die koordinierte Vergabe von Kitaplätzen angepasst.

An dieser Stelle beschreiben wir das Gale-Shapley Verfahren in seiner grundlegenden Art — ohne zusätzliche Anpassungen. Grundsätzlich lässt sich der Mechanismus  relativ einfach auf komplexere Situationen — zum Beispiel Kitas, deren Betreuungsplätze voneinander abweichen da unterschiedliche Betreuungsumfänge und Alterskategorien vorherrschen — anpassen. 

**Zentrale Durchführung**: Eigentlich wird das Gale-Shapley Verfahren zentral durchgeführt. D.h. Prioritäten der Kitas und Präferenzen/Rankings der Bewerber werden zentral gesammelt, und anschließend wird eine Zuteilung via Gale-Shapley Verfahren direkt ermittelt. Dies ist jedoch im Hinblick auf die Trägerautonomie oftmals so nicht umzusetzen. 

**Semi-Zentrale Durchführung**: Die koordinierte Vergabe von Kitaplätzen wird semi-zentral durchgeführt. In diesem Fall werden die Präferenzen/Rankings der Bewerber zentral gesammelt, aber die Kitas nehmen dezentralisiert an der Vergabe teil, d.h. sie durchlaufen jeden Schritt der Vergabe einzeln. Dadurch ergibt sich die Möglichkeit gegebenenfalls vom vorgegebenen Kriterienkatalog abzuweichen.  

{: .note-title}
> Wichtig
>
> Für ein einfaches Beispiel des Gale-Shapley Verfahrens — im Vergleich mit den herkömmlichen Verfahren — siehe <a href="/docs/Gale-Shapley-Verfahren/Gale-Shapley-Beispiel">Beispiel: Gale-Shapley Verfahren</a>, <a href="/docs/Gale-Shapley-Verfahren/First-Preference-First-Mechanismus">Beispiel: First-Preference-First Mechanismus</a> und <a href="/docs/Gale-Shapley-Verfahren/Unkoordiniertes-Verfahren">Beispiel: Unkoordiniertes Verfahren</a>

  
---   
  
## Zentrales Gale-Shapley Verfahren:

**Schritt 1**.

  1. **Kita Angebote**: 
     
     Kitas machen innerhalb der Matching-Software für jeden ihrer Plätze ein Angebot an einen Bewerber — und zwar beginnend mit den höchst priorisierten der Reihe nach folgend.
  
  2. **Bewerber Annahmen**: 
     
     Bewerber, die mindestens ein Angebot erhalten haben,  nehmen das beste Angebot automatisch innerhalb der Matching-Software vorläufig an und geben den anderen Kitas, die ihnen in der Runde ein Angebot gemacht haben, eine definitive Absage. 

**Alle weiteren Schritte (2, 3, 4, …)**.

  1. **Kita Angebote**: 
     
     Kitas, die mindestens eine Absage erhalten haben, machen ein neues Angebot pro Absage --- außer sie haben keine Bewerber mehr, denen sie ein Angebot unterbreiten möchten. Kitas, bei denen kein einziges Angebot abgelehnt worden ist, machen kein weiteres Angebot.
  
  2. **Bewerber Annahmen**: 
     
     Bewerber, welche zusätzliche Angebote erhalten, können entweder ein neues Angebot vorläufig annehmen oder ihr derzeit gehaltenes Angebot beibehalten. Danach erteilen sie allen anderen Kitas, die ihnen in der Runde ein Angebot gemacht haben,  eine definitive Absage.
  
  3. **Ende**: 
     
     Falls kein einziges neues Angebot gemacht wurde, ist eine finale Zuteilung erreicht. Bewerber haben einen Kitaplatz bei der Kita, deren Angebot sie zuletzt vorläufig gehalten haben — vorläufige Annahmen werden jetzt zu definitiven Annahmen. Bewerbern, die kein Angebot halten, gehen leer aus.
 
 
---

## Semi-Zentrales Gale-Shapley Verfahren:

**Schritt 1**.

  1. Gemäß ihrer vorsortierten Liste machen Kitas innerhalb der Matching-Software  für jeden ihrer Plätze ein Angebot an einen Bewerber — und zwar generell beginnend mit den höchst priorisierten der Reihe nach folgend. 

     **Dezentral: Aufgrund der semi-dezentralen Natur des Verfahrens haben Kitas jedoch die Flexibilität, bei Bedarf von dem Kriterienkatalog/Prioritäten abzuweichen.**

     **Wichtig: Weicht eine Kita vom Kriterienkatalog ab, sollte dies begründet werden.** 
  
  2. Bewerber nehmen automatisch innerhalb der Matching-Software ein Angebot vorläufig an und geben den anderen Kitas, die ihnen in der Runde ein Angebot gemacht haben, eine definitive Absage. 
    
     **Zentralisiert: Dies geschieht automatisch  über die hinterlegten Präferenzen.**
 
**Alle weiteren Schritte (2, 3, 4, …)**.

  1. Kitas, die mindestens eine Absage erhalten haben,  machen ein neues Angebot pro Absage  Kitas, bei denen kein einziges Angebot abgelehnt worden ist, machen kein weiteres Angebot. 

     **Dezentral: Auch in jedem dieser Schritte können Kitas bei Bedarf von dem Kriterienkatalog/Prioritäten abweichen.**
  
  2. Bewerber, welche zusätzlich Angebote erhalten, können entweder ein neues Angebot vorläufig annehmen oder ihr derzeit gehaltenes Angebot beibehalten. Dann erteilen sie allen anderen Kitas eine definitive Absage. 

     **Zentralisiert: Dies geschieht automatisch über die hinterlegten Präferenzen.**

  3. Falls kein einziges neues Angebot gemacht wurde, ist eine finale Zuteilung erreicht: Bewerber haben einen Kitaplatz bei der Kita, deren Angebot sie halten. Bewerber, die kein Angebot halten, bleiben zunächst unversorgt.


