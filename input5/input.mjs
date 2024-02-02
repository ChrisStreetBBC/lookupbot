export const data = `AC - Acceptance CriteriaAction Sheet(iOS) A view that slides up from the bottom of the screen and presents a few CTAs.e.g. when you press ‘More’ on the Episode Detail page.Sometimes used cross-platform in Sounds to refer to the more general UX pattern, which is implemented as an Action Sheet on iOS and a BottomSheet on Android.
ADM - Analytical Data Model https://broxy.tools.bbc.co.uk/bbc-serv/data-force-analytics-data-model/sounds/
Airship - Formerly known as Urban Airship.Airship is the platform we use to send Push Notifications on both iOS and Android
Android Auto - (AAP)An in-car interface for the Android Sounds mobile app which requires your phone to be tethered to the car/head-unit.
Android Automotive OS (AAOS) - A fully fledged in-car Android operating system which runs a separate standalone binary to that which runs on Android Mobile.
ANR - Application Not Responding.This is a dialog that pops up on Android devices when the main thread is blocked for more than 5 seconds, which means it cannot respond to input events, eg. scrolling.
App Center - A system for publishing binaries and crash reports. We use this to distribute our build artefacts from CI, eg. the buildly and spikelee
Apple CarPlay - An in-car interface for the iOS Sounds mobile app which requires your phone to be tethered to the car/head-unit.
Bottom Sheet - (Android) A view that slides up from the bottom of the screen. Sometimes used for presenting CTA options, as in the Action Sheet pattern above. But also for more general sliding containers, eg. the PAC sliding up into the FSP.
Brand page - A Container page that has a Brand object in it.A Brand is a type of TLEO that contains Series or Episodes.Brand, Series, Episode are all business domain objects that originate from PIPS. The Sounds app was designed to avoid us being coupled to this data model, but some domain concepts have leaked into our information architecture.
Buildly - When a merge to develop takes place, this is the build artefact output by our CI.
BuyDRM - This is a third party DRM provider that the Sounds App used to use before moving to an in-house solution called Native DRM
Cat 1 Obit - This is an operational mode within the BBC that gets activated when somebody who is designated "Category 1" dies. Currently, this is just The King.In the event of this happening, sudden changes may be made to programme schedules and featured rails. Any changes will be handled upstream of the app and supplied by RMS, but we should keep an eye on the app and ensure it responds appropriately.
Combined Audio Product (CAP) - The original name for the Sounds App when we started development but before anyone had thought of a name. It comes from the idea that Sounds is a combination of the functionality of the BBC iPlayer Radio app and the BBC Music app (both now discontinued).
Category - A group of programmes of the same genre. e.g. Drama
Charles - A proxy tool used in dev and testing for various purposes eg. mapping remote files to local stubs
Cold Start - When the app is launched without it being previously in memory, so it has to run through bootstrap.
Collection or Curated Collection - An editorially curated set of programmes around a particular theme. e.g. Mental Wellbeing (NB this link is to the collection within the player as there is no direct URL to show the contents of the collection on web)
Commercial Links - Alongside track information which is provided for a music programme, we also have links to third party music services (eg. Spotify, Apple Music) to enable the user to quickly play that song.
Config - A file that provides environmental context for the behaviour of the app. There are local and remote versions of this.
Container Page - An app level view of a group of programmes. Can be used to show a Collection, a Category, a Brand or Series.
CTA - Call To Action. A UI element that you can press to do a thing. A button basically.
Develop - A github branch which our day to day development PRs are merged into. When we build a release, this branch is PRed into release-mobile for mobile app releases, and release-automotive for android automotive releases.
DAB - One of the crews / squads on the Sounds Mobile Apps team.
Dial - The live station selector at the top of the listen page
Echo - The BBC Stats library.
Episode Detail Page - The screen you see when you select a programme from a list of programmes.
FM - One of the crews / squads on the Sounds Mobile Apps team.
Full Screen Player (FSP) - When you start listening to a live stream this pops up from the bottom of the screen to provide easy access to transport controls. It can be accessed by pulling the PAC upwards.
HMW - How Might We
Information Architecture (IA) - The navigational hierarchy and structure of the app.Often used somewhat erroneously within Sounds to refer to the content of the Music tab and the Podcasts tab (eg. Music IA / Speech IA)
Impression Stats - These are statistics that are sent when at least 50% of an item is displayed on the screen for more than 1 second.
iPlayer - A streaming media app a bit like Sounds but with the added inconvenience of pictures.
iPlayer Radio (iPR) - An amazingly cool application for Radio, now discontinued. The predecessor of Sounds. Not as good as Sounds.
Listen Page - The page you see when you first launch the app or click Home on the tab menu. It presents the Listen feed.Local
Config - A file within the app codebase which provides a key-value store for some easily changeable values.(In Android this is an xml resources file, in iOS it is local json.)
LTS - Long-Term Service version. An app version which can stay live for a long time, allowing users who can't upgrade their device OS to continue using the app, even after we drop support.
release-mobile - A github branch which represents the current live iOS or Andoird mobile application code. When building a mobile release, we merge develop into release-mobile and build the RC from release-mobile
release-automotive - A github branch which represents the current live Andoird Automotive mobile application code. When building an automotive release, we merge develop into release-automotive and build the RC from release-automotive
Master - The original name for the mobile release branch. This is no longer used, however you may come across older documents or conversations referencing it. The new branch name is release-mobile. We use release-automotive for android automotive releases.
Media Applications Technologies (Media AT) - The company the BBC uses to publish its apps through in the app stores.
Module - A self contained part of the codebase which sits within the main application. We are currently in the process of modularising the codebase on Android and iOS.A concept in RMS. A list of playable items which are shown together in the app UI. eg. Unmissable Sounds and Continue Listening are currently shown as modules on the Home page.
Monitoring - A system we built to allow us to check the health of apps when they have been released. We have a dashboard which gives us a view of various metrics.
Native DRM - An in house DRM solution which has recently been integrated into the Sounds apps. It is maintained via an Inner Source model.
Optimisely - A platform for performing MVT. We use this to perform server side experiments and are working on the ability to also do client side experiments.
PAC - Persistent Audio Control.This is the small black bar that appears at the bottom of each screen which shows what you are currently listening to.
PID - pid https://confluence.dev.bbc.co.uk/display/GLOSSARY/PID
PIPS - pips https://confluence.dev.bbc.co.uk/display/GLOSSARY/PIPsPlay
Console - The Google developer console. This is where we publish releases and check over some app health stats post release.
Push Notification - A message that is sent to the app from a server and rendered in app as an Android/iOS notification.
PR - Pull Request. We make these whenever a testable unit of work has been completed. Once approved, the PR can be merged to develop by the person who raised it.
 Rail - This is what product people call a Module
RC - Release Candidate. When we are ready to ship, we build one of these and test it. If a critical bug is found, we might publish a second RC for that application version and repeat the process. If it is ok we publish it for users to enjoy.
Remote Config - A JSON file hosted on AWS which is versioned to match the application. It defines various settings, urls and switches which we may want to have the ability to change independently from the app release cycle. Has test and live variants.e.g. https://sounds-mobile-config.files.bbci.co.uk/android/1.22.0/config.json
RMS - Radio and Music Services.A BBC team which provides the APIs supporting the Sounds app on mobile, web and tv.
Scrub bar - The draggable UI component in the Full Screen Player which allows you to seek to a different position. Also called the Seek Bar.
SIP - Single Item Promo. The rectangle on the home screen of the app which is promoting something
SMP - Standard Media Player.A BBC library which provides playback for Sounds and iPlayer.
Snackbar - An Android component. Like a Toast but swipeable and can have CTAs
Spikelee - A build variant of the Sounds app. This is used when spiking a solution that you want to share easily with testers via AppCenter, but you aren’t ready to pull the code into develop branch yet, as the code is not production ready.
Stroking the swan - A phrase sometimes used by the Sounds App Team to masquerade as a corporate buzzphrase, when in fact it is completely meaningless. Sometimes used to end boring conversations. e.g. Thanks for your input. We’ll have to stroke the swan on this one.
Swagger - A way of documenting APIs.e.g. the RMS Swagger docs are here https://broxy.tools.bbc.co.uk/rms-swagger-api-docs/
Telemetry - Client status reporting, using anonymised data, for identifying and resolving issues. Primarily the information used for monitoring & alerting tools, but could also refer to crash reporting.Monitoring, basically, but a cleverer word for it that people sometimes use to show off.
Themes - A way of styling the generically structured modules within the app to give them a different visual identity.Themes can be specified by RMS as the style attribute on a module or overridden by the app team in remote config.
TLEC - Top Level Editorial Container basically the thing that holds a list of episodes (brand, series, collection or category)
TLEO - Top Level Editorial Object as above
Toast - A transient popup message ui component on Android
UAS - User Activity Service, remembers a user’s activity on the BBC and provides personalisation. We send play data from the app via RMS to UAS to enable features like Continue Listening.
UCP - User Controlled Playlists. A feature of the Sounds app added in 2.6.0 iOS which enables you to move items around in your play queue or add stuff.
VPID - A Version PID. One PID, representing a programme, may have several VPIDs, representing different audio versions of that programme.
Warm Start - When you launch the app from the device’s application launcher, but some aspects of the app were already in memory, so the application did not need to go through initialisation.`;
