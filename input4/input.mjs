export const data = `360 - Part of the (old?) PDR process where colleagues are asked to provide feedback on one another
ABL - Apps Business Layer— new back-end, capturing the business logic of the apps, allowing the apps themselves to be “thin clients”. Pronounced “able”
ADR - Architecture Decision Record
Airship - Push notification service to send to devices. Formerly known as Urban Airship
Alephamp - Renders and serves (older) Accelerated Mobile Pages - now decommissioned.  Replaced by Simorgh.
AMP - Accelerated Mobile Pages ( https://amp.dev/). Example of a BBC AMP Story.
APK - '.apk' is the file format for Android apps. An “APK” is an Android app build.
AR - Augmented Reality simulated 3D visuals displayed in a live video in real time on the user’s device
Archiver - Software that takes a list of page URLs, adapts the content to make them future-proof, and stored them in a ‘content’ bucket in S3, and a ‘static’ bucket in S3
Archivist - Part of Mozart that serves content from the Archiver’s ‘content’ bucket, and also pages from the Static Archive and GWAA.
Ares (AReS) - Aggregation Rendering System.  https://confluence.dev.bbc.co.uk/display/ARES/Ares+FAQ
- Backend for merging/syncing up various BBC data sources like CPS or Optimo
- Notable uses - story and article data for non forge applications, and indexes. It also does Indexes ;-)
ART - Accountability and Reputation Tracker. General impression, awareness, usage and
opinions of key BBC and competitor services.
ATI - AT Internet (ATI) Analytics is a digital analytics vendor that provides a SAAS analysis platform and data export product for the BBC data lake -  https://www.atinternet.com/en/ and  https://confluence.dev.bbc.co.uk/display/analytics/ATI+Analytics+-+Getting+Started
AVKX - Audio/Visual Key Experience. An SMP system / A UX team responsible for the AV playout components
AWS - Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. This is the cloud platform where Off-Forge services are hosted.
Barlesque - Predecessor of ORB and Orbit providing global navigation at the top and bottom of webpages (and other common functionality)
BDS - (Business Data Service?) The old Market Data backend, no longer in use
Belfrage - Routing/Preflight application acting as the entry point to Web Core and other applications/stacks
Bundle size - 
CAF - The Common Article Format (CAF), transforms the body of CPS articles into Optimo blocks, and serves CAF versions of them to the existing Optimo endpoint -  https://confluence.dev.bbc.co.uk/display/ARES/Data+Systems+Common+Article+Format
Camino - An API that surfaces recommendations from machine learning algorithms such as Recsys
Candy - CPS And Dynamic content
Candy XML - An XML representation of the content that has been produced by one of the CPS editorial tools for delivery over the CPS Content API. This XML is often transformed into JSON by the consuming service, or can be accessed as JSON through an abstraction layer called Ares.
Caravan - A coffee shop near NBH
Chameleon - A News Apps UX project
Chrysalis - Chrysalis is a rebuild of the BBC News apps on Android and iOS, with the intention of appealing to younger audiences. -  https://confluence.dev.bbc.co.uk/display/newsapps/Chrysalis 
Chartbeat - an analytics company, the BBC uses it for real-time data on our pages. It has a browser extension that lets you see how many users are on a page, how far down users have scrolled, and which parts of the page are being clicked on. 
Charles Proxy - Web debugging tool which displays HTTP, and SSL/HTTP request and responses that are sent and received and is used to debug any issues
CMS - Initialism for Content Management System - a generic term for a tool that allows a user to create and manage content. Examples of CMSes used in News include CPS, Vivo, and Optimo
CodeBuild - CodeBuild and CodePipeline can be used instead of Jenkins for building, testing and deploying software. They are available as part of AWS.
Core Services - See WebCore
Cosmos - The service which manages deployments of your software and provides the buttons to deploy it to the integration, test and live environments on the cloud (AWS). It allows software changes to be made using a Continuous Delivery methodology.
Comscore - Comscore is an American media measurement and analytics company providing marketing data and analytics to enterprises; media and advertising agencies; and publishers. The BBC uses this service to collect analytics (potential audience size for Ads). It’s also used internally to compare our audiences with our competitors. Comscore was our main analytics provider before ATI.  
CPO - Chief Product Officer - The head of the new Product division, which will include DPG.  Storm Fagan joins in this role in September 2021.
CPS - the main CMS (content management system) used in News, World Service, and Sport - currently on v6 (client) and v7 (publishing chain). To be superseded by Optimo for some purposes. Journalists use CPS to write, edit and publish news stories as well as to add them to indexes, tag them and many more things. It does a lot!
CPS Content API/Candy API - Exposes content created in CPS editorial tools, including from CPS Core and Vivo. Some teams at the BBC use the CPS Content API directly in their products/services, while BBC News teams are encouraged to use AReS as this collects data from other sources too.
CPS Vivo - See Vivo
CR - Code Review - a process used by engineers to review each others code.  https://github.com/features/code-review/
CSP - Correspondent Piece - a CPS asset type, similar to an STY but with extended byline metadata. Example
CTO - Chief Technology Officer (Peter O’Kane) - the head of the BBC’s Technology division (which doesn’t include DPG)
CTP - Curated Topic Page. Example. Created using Mozart.
Curie - A type of ID used for Content Store / Content API assets, in the form of a GUID but sometimes combined into a URN or URI
Cypress - JS based testing framework (typically for end to end testing) -  https://www.cypress.io/
D+E - Design and Engineering, a former BBC division helping the organisation deliver TV, radio and online services to millions of people every day.  Replaced in 2021 by separate divisions known as “Technology Group” and “Product Group”.
DAG - Divisional Approval Group - shadowy organisation in the BBC which must approve all recruitment
DataSys - Common abbreviation for the Data Systems team.
DCP - Democratic and Civic Participation
Deimos - Article onward journeys - Web Service (API) to provide article onward journeys data for rendering by another service (simorgh, web core presentation layer, etc) - also provides hydrated Most Read data for all page types
Digital Look - Old Market Data supplier, no longer used
DG (Director General) - The chief executive, and editor-in-chief, of the BBC.
DSI - Dismissable Sign in (predecessor to MSI)
Echo - The Echo analytics libraries provide a unified way for BBC products to manage client-side event-tracking of user interaction and AV events. This library is used by Android and iOS native apps and the SMP on all platforms.  See also - Reverb
EDP - Election Data Platform - backend system for election results
EDP includes - EDP includes are specifically includes with results from the 2019 General Election. In this context EDP stands for Election Data Platform, but that’s a bit of a misnomer, because they don’t really come directly from the Election Data Platform. 
Embedephant - Service which fetches social embeds from Twitter, Facebook, Instagram and Youtube (oembeds) and screenshots them, then serves the results to Ares and/or front-ends to render in CPS STY pages
EPM - Executive Product Manager
ESL - English as a second-language.
ExCo - Executive Committee - a very senior layer of BBC management (there are several of them though)
FABL - Fast Agnostic Business Layer, pronounced “fable”. Data fetching and transformation platform for web core (and others)  https://github.com/bbc/fabl
FIX pages - Feature Index. A CPS page type that allows journalists to spin up a stand-alone page to curate content around a specific event/subject. Example - New Tech Economy
Forge - Previous platform used to develop apps across the BBC - LAMP (Linux, Apache, MySQL, PHP) without the “M”
Frank - A News Labs prototype that allows easy discovery of stories across language desks by utilising Machine Translation.
FTE - Full Time Equivalent.  A way of measuring the number of staff/employees where a full-time member of staff counts as 1, and a part time member of staff as a decimal proportion, e.g. 0.2 for one-day per week.
GAMA - GNL Advert Management API. Designed for Apps.
GNL - Global News Limited. A commercial subsidiary of the BBC tasked with commercialising News content outside the UK. Now part of BBC Studios (a commercial subsidiary of the BBC)
GTM - Global Traffic Management is the new traffic management and HTTP caching solution that is replacing Varnish and the VTMs (on www domains) -  https://confluence.dev.bbc.co.uk/display/GTM/GTM+Client+Introduction
GWAA - The Global Web and Archive project, also known as Project Greenland. Holds all of the pre-responsive World Service sites.
Hyperpuff - A hyperpuff is a simple list in CPS. It can be static so the content added to the list never changes, or dynamic so each item in the list is a reference to an item in another list which may change. (Source)
IBMS - 
iBroadcast2 - Next Generation media and meta-data publishing platform for the BBC and beyond -  https://confluence.dev.bbc.co.uk/display/ibroadcasttwo/iBroadcast+2.0
IDT - In depth toolkit. Suite of tools that allow journalists to create embeddable content (charts and the like) for stories/articles in particular  https://confluence.dev.bbc.co.uk/display/DATPRES/IDT (There are two distinct IDTs - IDT and IDT2)
IDX - An index asset in CPS. Normally editorially curated although not always. Normally used for ‘sections’ including news/politics or persian/afghanistan
Image Chef/iChef - resizes and/or compresses images on the fly using predefined recipes. News Image Chef -  https://github.com/bbc/news-ichef
Index - See IDX
INT - Integration Environment (a deployment stage in Forge) which is now an optional stage in Cosmos.
ipa - '.ipa' is theFile format for iOS apps. An “IPA” is an iOS app build
iSite - Content management system sitting on the Forge platform. We are using it as an editorial content authoring environment using its web content management framework (source). Used for all sorts of things, but Optimo should make it redundant in future. Also used to create the News navigation menu.
Jenkins - Jenkins is a free and open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat.
JML - Joiners Movers Leavers, a process used to manage staff joining, moving teams or leaving the BBC.
KR - Key Result. The measures and milestones that indicate how you know you will accomplish a given Objective.
LDP - (“PAL used LDP as the topic ID”) - the Linked Data Platform (Series of APIs, now owned by UCED team), which in turn consists of ‘BBC Things’ and ‘Creative Works’.  This is the datastore for tags and the relationships between content and tags (currently - soon to be deprecated in favour of Passports).  Each BBC Thing has an ID and may refer to a real world concept such as a person, place, event, organisation, etc.  In the olden days ‘tags’ and ‘topics’ were synonymous, but now Topics are distinct entities which may have relationships with one, more, or no tags.
M&A - Marketing and Audiences
MAP - Media Asset Page - a CPS asset intended to contain a video or audio clip / live stream as its main piece of content (PS - example on PAL, WS - example on Simorgh). The video clip is also called SFV.
Midas - (Market Data Service) The “new” Market Data backend, built by the Data Systems team.
Mock - Tool used to ‘containerise’ (in a fairly rudimentary way) the building of RPMs in cloud-jenkins ( https://github.com/bbc/bbc-mock-tools)
Morning Star - “New” Market Data supplier, supplies data about companies, shares, etc. to Midas.
Morph - a JavaScript service which fetches data from a variety of sources, manipulates the data, and outputs that data over an API or renders that data into HTML components or webpages.  Used widely in Sport, and fairly widely in News, including to render components on the News Front Page ( https://github.com/bbc/morph-modules)
Mozart - Web routing, preflight, and page assembly application ( https://confluence.dev.bbc.co.uk/display/mozart/Mozart) used by the majority of news & weather web applications, and some sport.
MPU - Mid-page units - a standard size display advert. Strictly speaking 300px wide by 250 px high. Sometimes MPU ads are taller than 250px though, which can be complex for working out how best to bring them into pages.
MQL - Metadata Query Layer, will be a service that will allow us to answer both simple and complex questions about content from across the BBC. MQL will sit next to Topics as a Service as an enabling capability. For any service that makes use of our Topics capability, they will also be able to seamlessly utilise MQL for advanced Topics data returns. Taking data from multiple sources (for example UCED, APPW, UAS, TIPO, VIVO) concerning content, ioffer the ability to ask a complex question of that data to return a novel view of a Topic or multiple Topics. 
MSI - Mandatory Sign in
Nassim - An extended and customized version the typeface Nassim used by BBC World Service RTL (right to left) services. Replaced by Reith Qalam.  https://www.rosettatype.com/custom-fonts/BBC-Nassim
NBH - New Broadcasting House - the BBC’s headquarters on Portland Place in central London
Ngas - Next Generation Ad Serving. NGAS is the new ad service, built off Forge, to replace the bbcdotcom old Forge module, and support PS new platforms (all using Webcore, except for World Service which is using Simorgh). Even though it’s referred to as an ad service, the new module will handle more than just the ads, it will handle all the third parties services we use on bbc.com sites.
NMAG - The News division’s equivalent of DAG
North Star - A definition of our purpose, most recently shared in the News Online 2021 Roadmap session. “We need to expand and diversify who we reach, how we reach them, and what audiences think of us. We will transform how society interacts with news, by delivering news products that are easy, trustworthy, immediate, loved and reliable. We want everyone to find news valuable, every day.”
OKR - Objective Key Result. A measureable goal set for a period of time (usually a quarter)
OJ / OWJ - Onward Journeys. Content-based navigation from a content page such as an article. Not navigation menus.
Olio - New tool for managing Curations in Tipo topics
Onward Journeys API - See Deimos
Optimo - Optimo Client is a CPS-built web application and is the BBC's next-generation article editor. It is written in JavaScript (React, Node) and is hosted on AWS. Optimo Client sits behind the Partner Platform Access Proxy so can only be accessed by users that are authorised for the Optimo group in Partner Platform -  https://optimo.tools.bbc.co.uk
ORB - (One Responsive Barlesque) Older version of Orbit
Orbit - (One Responsive Barlesque In The cloud) A library used on some webpages to add the pan-BBC navigation banner across the top, pan-BBC footer, and a variety of javascript libraries that do all sorts of things -  https://navigation.api.bbci.co.uk/
Origami - a prototyping tool developed by Facebook that can be used to create interactive prototypes with live data
Otter - Project Otter has been set up to renew the SMP Mobile offering to our clients.
OTG - Online Technology Group. (formerly Digital Distribution & Delivery or DD&O) department within Future Media (FM, formerly FM&T) is responsible for the development, operation and management of the BBC's online, mobile and iTV infrastructure. This includes media streaming, web platforms and network and distribution channels for all digital media both in-house and via third parties.
PAL - The Page Assembly Layer on the Forge, which is where web applications are written. These are usually written in PHP, but Perl is also supported.
PDG - Product Direction Group
PGL - Picture Gallery - a CPS asset type, similar to an STY but consisting mainly of images
PID - The Programme IDentifier - a unique 8-character (0-9, a-z) used in PIPs to identify the video clip or the parent programme. 
PIPs - Programme Information Platform. It is the BBC's primary database for broadcast media metadata. It allows this metadata to be queried and updated by means of web services.
PDR - Personal Development Review - old name for a staff member’s annual review with their line manager
PGL - Asset type code for a ‘Picture Gallery page’ asset created in the CPS or TopCat2 CMS
PopAPI - API which provides a list of the current most popular content 
Pres - abbreviated name of the Web Core Presentation Layer, which renders some webpages
PR - Pull Request -  https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests
PRO asset - A CPS ‘promo’ asset, intended to promo a webpage with a custom headline, image, and summary
Psammead - A package library which contains a mixture of components, containers and utilities (used by Simorgh) -  https://github.com/bbc/psammead
PS - Public Service, broadcasting intended for public benefit rather than to serve purely commercial interests. Also used in our department to mean “not World Service”, although these two uses are not really synonymous.
RAG - Red Amber Green. Sometimes used in healthchecks as a measure of whether a system is in a good state or ready to go live.
Recsys - A set of Python machine learning algorithms that provide recommendations for News and Sport content. They vary in complexity and features (some just give recommendations based on assetUris, others take user data) and are managed by teams outside of News
Reith - A BBC typeface used across many BBC services including News -  https://www.bbc.co.uk/gel/articles/introducing-bbc-reith
Reith Qalam - BBC typeface used for RTL (right to left) services, used in World Service News.
Reverb - Library for sending analytics data from webpages to ATI. Used on Public Service pages and other webpages with ORBIT or on WebCore (but not on Simorgh pages - Simorgh has it’s own functionality to send data to ATI)
RFC - Request for Comment
RHS - Abbreviation for Right-Hand Side - sometimes used to refer to the secondary column on a webpage containing e.g. onward journeys
RN/Responsive News - A suite of interdependent PAL apps that served the BBC News and (later) all World Service news web sites from March 2015 (although it started to take over from the News static site in early 2013, beginning on mobile, then later rolling out to Tablet and Desktop screen sizes) until its eventual decommissioning in November 2020.  Replaced by the technococktail of -
Mozart - (News Front Page, Market Data, Elections, early Shorthand, topics, LIVE pages, indexes, AV Embeds, psychic routing)
Belfrage  - routing
Simorgh/Psammead - (all World Service news/video pages, except early Shorthand, topics and LIVE pages)
WebCore - (all Public Service news pages except indexes, topics, LIVE pages, and video)
Archivist - (RN pages archived in the News Archive, pre-responsive pages from the Static Archive, and pre-responsive World Service pages from the GWAA).
SFV- Short Form Video - a WebCore capability rendering AV pages
SLT - Senior Leadership Team (potentially one of several)
Smallprox - Smallprox is a cloud-based, reverse nginx proxy that routes URLs to Visual Journalism services. It allows VJ customers (News, Sport, Newbeat and others) to retrieve VJ content agnostic to where the underlying services live.
SMP - Standard Media Player, owned by Media Services.  The player used on BBC webpages and apps for media content.
SNI - Server Name Indication
Simorgh - React JavaScript-based frontend rendering system for the World Service News websites  https://github.com/bbc/simorgh
Static Archive - the collection of “news” web sites that pre-date Responsive News. Includes '/''optim''news'but also things like Democracy Live.
STR - Strategic Technology Review - a pan-BBC review of our technology estate and org structure which took place from 2019-2021
STY - Asset type code for a ‘Story page’ asset created in the CPS or TopCat2 CMS
SumoLogic - old third-party platform for analysing server logs. No longer used.
TA - Technical Architect - a job role in the BBC
TAG - Technical Advisory Group - A weekly meeting of engineers from around the WebCore based teams to discuss and advise on technical challenges
Telescope (1) - Telescope is a tool that makes audience data available to all BBC News journalists in an intuitive language and interface. This will help them to make data-informed decisions when publishing and optimising content, increasing the reach and quality of our digital journalism.
Telescope (2) - Telescope is also the name of a third-party tool used to providing online voting functionality, for example the voting for Strictly Come Dancing.
Tipo - Tipo is a tool used by editorial to create Topics or Curations (some Tipo functionality can be accessed within the separate Vivo tool). Curations can be either manually selected, or rules-based. 
TopCat - an older CMS (content management system) used by World Service prior to their migration to CPS (content production system), which is the current CMS.  There were two versions - TopCat and TopCat2.
Toucan - The new SMP player built with Web Components
TC2 - See above (TopCat2)
Trevor - News Apps ‘backend’ -  https://confluence.dev.bbc.co.uk/display/TREVOR/Trevor+Overview
U35s - Under 35 year old users
UAP - Universal App Platform
UAS - User Activity Service (more info)
UCED - Universal Content Exposure and Delivery (UCED) proposes to address the challenges with D+E’s prevailing fragmentary content exposures. It promises that a D+E product team can confidently, quickly get access to all of the content available in the BBC and put it to work in their product (or experiment or tool or whatever) without needing to hunt down teams that they heard have some extra content, getting permission or runes to access that data, learning new API interaction patterns, building databases to join data across APIs etc.
UGC - User Generated Content
Unireccs - A universal API that wraps around services like Camino to expose recommendations from different APIs across all of BBC. Camino is for News/Sport but there are also recommendations for iPlayer/Sounds and other places as well, and Unireccs exposes all of these.
Varnish - The legacy platform HTTP cache currently used by most products and origins.
Vivo - Allows editorial to create content in short form, useful for live commentaries on football matches and live business/event pages.  https://confluence.dev.bbc.co.uk/display/cps/CPS+Vivo
VJ / VisJo - the Visual Journalism team
VTM - Virtual Traffic Manager (formerly STM, also formerly ZXTM) https://confluence.dev.bbc.co.uk/display/GTM/GTM+Client+Introduction 
WebCore (Now known as Core Services) - Web publishing platform for (predominantly) Public Service content. Made up of a series of applications - Belfrage, Web Core Presentation Layer, & FABL
WS - World Service, international news services provided by the BBC.
World2020 / WS2020 - Government funded project to expand the World Service. W2020 roles are those funded by the Foreign Office (i.e. not License Fee). Formerly also known as World Service 2020 / WS2020.
WS Engage (World Service Engage Team) - A former World Service team whose primary objective is around 'Engagement'. Responsible for driving audience engagement with the World Service websites regardless of page type. Engagement is likely to be defined by the metric page views per user per time period. Formerly WS Stories team.
WS Media (World Service Media Team) - A World Service team whose primary objective is delivering media experiences that measurably improve audience engagement and playcount across the language sites.
Zoom - Software tool used for video conferencing
BFF - Backend for Frontend`;
