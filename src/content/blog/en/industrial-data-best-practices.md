---
title: "Five principles for turning industrial data into an asset"
description: "Practical principles for turning scattered field data into something you can trust and decide on."
pubDate: 2026-07-29
updatedDate: 2026-07-31
author: "Refinery Team"
tags: ["best practices", "data", "ontology"]
category: "Guide"
coverColor: "#D3E7F8"
coverTextColor: "#173B6B"
coverIcon: "/icon_blog.svg"
coverFoot: "Guide"
titleBreakAfter: ["for turning", "industrial data"]
cardBreakAfter: "Practical principles for turning scattered field data"
lang: "en"
---

Industrial sites do not lack data. If anything it is **too scattered** across SCADA,
MES, ERP, sensors and documents to be of use at the moment a decision has to be made.
The problem is not volume. It is connection and trust.

What we have seen repeat across many sites is that turning data into an asset does not
start with some grand technology program. It starts with holding to a few basics. The
five principles below are a starting point for turning scattered data into something you
can decide on.

## 1. Keep the provenance

Every figure should carry "where did this value come from" with it. A number without
provenance cannot be used for a decision, however convincing it looks.

When an anomaly appears on site, the first question anyone asks is "is this real?" The
same value of 90 means something entirely different when it comes right after a sensor
recalibration than when it arrives at the end of an unusual trend. Unless the value carries
a record of which system and tag it came from, when it was collected, and what
transformations it passed through, there is no way to tell whether that number is fact or error.

Data lineage is therefore not a <span class="nb">nice-to-have</span> but the minimum condition for trust. Make the
source system, tag, collection time, and any unit conversions or corrections travel with
the value. Buried inside an ETL script it is of no use. It has to be something you can
trace back the moment you need to.

The most common mistake is to accept a number on a dashboard as fact. What is on screen is
the output of several stages, and an error anywhere along the way blends quietly into it.
When provenance is visible, that error can be traced back and corrected.

## 2. Give it meaning (the ontology)

If only one person in the organization knows what `TAG_0421` means, that data is not an
organizational asset but that person’s memory. The moment they are away or leave the
company, years of accumulated data revert to an uninterpretable pile of numbers.

Giving data meaning means defining things such as equipment, lines, processes and
documents as entities, and describing the relationships between them. The structure that results is
called an ontology. With one in place, a single signal can be read together with the
context it connects to. When a vibration value spikes, the system can work out on its own
that the sensor belongs to pump 3 on line B, that the pump had its bearing replaced two
weeks ago, and that it feeds reactor 2 downstream.

An ontology sounds like an elaborate technology, but in practice it is closer to writing
down the common sense of the site as data. Which machine belongs where, and what connects
to what, is already in the head of someone who has worked there a long time. The point is
to get that knowledge out into a structure.

Trying to draw an <span class="nb">enterprise-wide</span> ontology from the start is exhausting. Pick the single
judgment that repeats most often right now, and define only the entities and relationships
that judgment needs. Starting small and widening as you confirm it is actually used lasts
much longer.

## 3. Look at real time and history together

Anomalies show up in the **trend**, not in an instantaneous value. A temperature of 82°C
tells you nothing on its own about whether it is normal or a warning. You need to know the
range this machine usually moves within, and how fast the value is climbing now.

So the <span class="nb">real-time</span> stream and past history have to be comparable on one screen. When the
current value sits alongside the last few days, the pattern from the same period last
season, and the curve leading into a past failure, you can tell whether what is happening
now is a signal you have never seen or one you recognize.

Put a threshold on instantaneous values alone and the alarms never stop, and eventually
nobody looks at them at all. Alarm fatigue mostly comes from thresholds without context. Seen
together with the trend and a basis for comparison, the signals worth acting on separate
from ordinary noise.

## 4. Return it to language people understand

If the result of an analysis stays as a number on a dashboard, interpreting it and turning
it into action falls entirely on a person. A red gauge only signals that "something is
wrong." It does not answer what, why, or how.

For data to lead to action, the last step has to come back into human language. "Vibration
on pump 3, line B is trending upward in a pattern resembling the <span class="nb">run-up</span> to the last
failure. Bearing wear is suspected; inspection recommended." When a likely cause and a
next action arrive as a sentence, someone with less experience can reach the same judgment.

This is where an AI agent earns its place. But the answer must come with its evidence.
Presenting which data, which history and which documents the judgment was based on lets
the user check the reasoning and decide, rather than simply believing the answer. An answer
without evidence is convenient, and dangerous for an industrial decision.

## 5. Layer on, or build new where there is nothing

The starting point for integration differs by site. Some have run SCADA, MES and ERP for
years. Others are only beginning to collect data at all.

Where systems already exist, most attempts to rip them out fail. The cost is high, and so is the
risk of replacing tools the site has long grown accustomed to in one move. Here it is more
realistic to leave the existing systems in place and add an intelligence layer on top that
integrates in both directions. The existing systems keep running, and a layer that adds
meaning to their data sits above them.

Where no system is in place yet, there are no legacy constraints to accommodate, so
building fresh from the collection stage up is actually cleaner. The structure can be
designed with the ontology in mind from the beginning.

What matters is not the method. Whether you layer on or build new, the only question is
whether the result comes together as one body of knowledge.

## In closing

The five principles connect to one another. Provenance creates trust; meaning creates
context; seeing the trend makes judgment possible; returning to human language makes it
action. And all of it is complete only when it gathers into one body
of knowledge, whether layered on or newly built.

<span class="lead-dot"></span>For data integration → [Data integration whitepaper](/whitepapers/data-integration)<br>
<span class="lead-dot"></span>For AI agents → [AI agent whitepaper](/whitepapers/ai-agent)<br>
<span class="lead-dot"></span>To talk through your own operation → [Contact](/en/contact)
