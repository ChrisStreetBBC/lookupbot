export const data = `ADR: Architecture Decision Record, something we use to propose and then record changes in architecture.

APPW: Available Programmes Publication Workflow

AOD: Audio on Demand, is the name given to unedited recordings of recently transmitted radio shows (e.g. The Chris Evans Breakfast Show), which are made available online for a limited period of time. These are usually referred to as "episodes", to differentiate them from podcasts.

AWS DMS: Data migration service, A web service that can help you migrate data to and from many widely used commercial and open-source databases.e

BBC Programmes:  the Programmes team that is based in W12 (White City).

BBC Programme Metadata Nitro: a read only cache for common PIPs queries and sets of queries. Developed by Programme Metadata in MediaCity (Salford).

BBC PIPS: Programme information Page(s), the metadata store for public facing programme information and publication detail. Developed by Programme Metadata in MediaCity (Salford).

BBC RMS: Radio Music Services, this team !

BBC RMP: Radio, Music, Programmes, Three teams (Radio, Music, /Programmes) from the old days of Sounds.

BBC SMP: Standard Media Player, one player to rule them all, made by Media Playout team in W12 (White City).

BBC Sounds Inline Experience API: A version of the Experience API where we give the client exactly what they need in the first request (eg. a list of playable items) instead of a URI to request those playable items from.

BBC STAF: Sounds Technical Approvals Form, where ADRs get reviewed/approved by other Sounds teams.

Biscuit: goes soft as it gets stale.

Brand: The brand of a programme is different to the master brand for a station or programme (see master brand). The brand of a programme is the branding, e.g. The Infinite Monkey Cage. A brand is always the TLEO (see TLEO)

Broadcast: A linear broadcast is something that plays on the radio. It has a PID. It will have a schdule with a number of programmes in it.

Cake: goes hard as it gets stale.

Change Restriction:  Change freeze/Change restriction is a time period defined by Senior Management when you can't make any significant changes to Live, each period may have particular restrictions and change may require EM approval.

CORS: Cross-Origin Resource Sharing, a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

Code Freeze: (See Change Restriction)

COSMOS: System for managing deployments of code and configuration, to both test and live environments. Based on Kuberneties.

Category: A format / genre for a programme on Sounds. Multiple categories for one thing, and multiple things in a category. Genres can be high level, e.g. Childrens, or sub category, like Childrens/Entertainment.

Clip: It's usually an edited version of a programme, typically an excerpt, such as an interview or soundbite. Similar to a Segment.

Collections: A curated set of programme. They have PIDs in PIPs. Programmes in collections will have positions.

Container: A container is a set of programme, typically represented by a brand or series. Containers can be nested.

DMS: Data migration service, A web service that can help you migrate data to and from many widely used commercial and open-source databases.

EC2: Elastic Compute Cloud, A web service that enables you to launch and manage Linux/UNIX and Windows server instances in Amazon's data centers.

ELB: Elastic Load Balancing, A web service that improves an application's availability by distributing incoming traffic between two or more EC2 instances.

Episode: A particular programme, usually within a series. An episode does not need to have a series.

Forge: The legacy platform that was hosted internally.

Favourites and Follows: Programmes that a user has favourited or followed.

Gateway: The BBC intranet

HSTS: HTTP Strict Transport Security, a policy which forces browsers to use HTTP over SSL (HTTPS) to help protect against protocol downgrade attacks and cookie hijacking.

JWT: Json Web Token - "is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key." (via wikipedia)

Lambda (AWS): A type of application that is only run at a specific time, e.g. in response to an event or on a schedule. Usually does one specific task. Similar to a functional Lambda.

Master Brand: All programmes must be associated with a master brand, and master brands can own zero or more live services. The master brand indicates the commissioner of the programme or service. E.g. BBC Radio 4 produces programmes such as The Today Programme, and owns two live services Radio Four FM and Radio Four LW. BBC News produces Newscast and owns no live radio services.

Music Export: A deprecated service allowing exporting of data. It's still in use for legacy reasons.

Music Mix: A curated collection of music with an introduction by familiar talent. Similar to a play list.

Network: A network represents either a master brand or a service in RMS. It carries a type field to distinguish between these. Historically, RMS treated master brands and services as the same thing and called them networks, but it became necessary to distinguish the two as more complexity was introduced.

OKR: Objectives and key results, a framework for defining and tracking objectives and their outcomes.

playable_item: An simplified version of our Programme object with an id if passed to SMP will play something.  An available (pc mediaset) episode or clip using its Version Pid as an identifier.  Can also be a live stream/Network which uses its Service ID to play a live stream in SMP.

Play Event: An event that is sent when something has been played. Typically this is sent after the first 30 seconds of a programme is played so as not to skew the data. This is used to caluclate popularity. There is also a view which breaks this down by day.

Play Queue: What's playing next. On demand radio experience based on PID. This is internal to RMS.

PID: PIPs/Programme Identifier

PIPs: PIPs is the metadata store for public facing programme information and publication detail  https://confluence.dev.bbc.co.uk/display/pips.

Podcast: A programme or episode with a download. It could be in the podcast format, a version type, or just a programme available for download.

Programme: A brand, series, episode, clip. Always has a PID. A playable programme is an episode or clip. A container is a brand / series. Series can be listed, but this is being deprecated. It's quite rare. Usually you have brand > series > episode/clip. A brand has to be top level, but other types can be too. Episodes do not need a container (they can be orphaned) Identified by PID here https://rms.api.bbc.co.uk/v2/programmes/<PID>.

Popular Music And Radio: Popular tracks, artists and playlists.

PSEM Publishing Services Editorial Metadata: A team in Salford, also known as the Programme Metadata team, who provide programme metadata via Nitro, PIPs and various workflows.

RCA: Root cause analysis:

Recommendations: Recommended programmes based on play history, popular radio and music.

Search: Search for a progamme. Dependent on an external BBC service.

Segment: A segment of a playable episode, usually a song, with a specific PID. Tracks are associated with sgements, segments assoicatied with a parent episode. Future segment types may include chapter, speech, music, classical.

Series: A collection of episode that make a logical series for a brand. E.g. The Infinite Monkey Cage brand has many series (1,2,3...).

Service: A service is a playable live station, owned by a master brand. Master brands can own multiple services: one is the default service, and the others are called sub-services. For example BBC Radio 4 has a default service of Radio Four FM, and a sub-service of Radio Four LW.

SMP: Standard Media Player Standard Media Player.

SUP: Sounds User Panel (SUP).

Talent: A presenter or someone on air; front facing.

TLEO: Top level editorial objects, the highest object at the top of a stack of objects for an episode (eg. the brand).

TLEC: Top level editorial container, occasionally used to refer to the subset of TLEOs which are brands and series (i.e. not orphan episodes).

UAS: User Activity Service, remembers a user’s activity on the BBC to enable your product and myBBC personalisation services to tailor unique experiences just for them.

UAT: User acceptance testing.

(AWS) VPC: Virtual Private Cloud, a logically isolated on-demand configurable pool of shared computing resources in the Cloud.

Version: When talking about Programmes, it generally refers to the edit of that programme. A version can have an associated availability, and may be editied differently. For example, you could have Desert Islands Discs as a Programme, with a streaming version that includes all music, available for 30 days. A second version may be offered for download, with music editied out, and available indefinitly.`;
