import { lazy } from "react";
// Component imports
import MyClasses from "../components/sidebar options/myclasses";
import Categories from "../components/Academic/categories";
import CourseCategories from "../components/Academic/CourseCategories";
import TutorDetails from "../components/Academic/TutorDetails";
import ScheduleStudent from "../components/Tutor/bookyoursessions/ScheduleStudent";
import ChatNotificationsPage from "../components/Tutor/chats/chatsListing";
import AddPackage from "../components/Tutor/tutor packages/addpackage";
import TutorMain from "../components/Tutor/main page/TutorMain";
import Sessions from "../components/Tutor/bookyoursessions/Sessions";
import AddNewDocument from "../components/Tutor/documents/AddNewDocument";
import BookYourSession from "../components/Tutor/bookyoursessions/BookYourSession";
import ChatBox from "../components/Tutor/chats/chats";
import TutorPackages from "../components/Tutor/tutor packages/tutorpackages";
import ComingSoon from "../components/toastalert";
import MeetingPreference from "../components/Tutor/meeting preference/MeetingPreference";

// Lazy-loaded imports
const NotFound = lazy(() => import("../components/notfound"));
const Home = lazy(() => import("../components/pages/LoginHomepage"));
const tutorMain = lazy(() => import("../components/home page/tutorMain"));
const LandingPage = lazy(() => import("../components/pages/LandingPage"));
const Terms = lazy(() => import("../components/policies and links/terms"));
const PrivacyPolicy = lazy(() => import("../components/policies and links/privacypolicy"));
const ContactUs = lazy(() => import("../components/policies and links/contactus"));
const myclass = lazy(() => import("../components/my classes dashboard/myclass"));
const NotificationPage = lazy(() => import("../components/notifications/notifiactionpage"));

const Academic = lazy(() => import("../components/Academic/Academic"));
const BookingSuccessful = lazy(() => import("../components/Academic/bookingsuccessful"));
const BookNowModal = lazy(() => import("../components/Academic/booknowmodal"));
const CourseDescriptions = lazy(() => import("../components/Academic/coursedescriptions"));
const CourseDetails = lazy(() => import("../components/Academic/coursedetails"));
const FilterModal = lazy(() => import("../components/Academic/filter"));
const PaymentModal = lazy(() => import("../components/Academic/paymentgatewaymodel"));
const BookYourTutor = lazy(() => import("../components/Academic/bookyourtutor"));
const BookYourTutorPayment = lazy(() => import("../components/Academic/paymentpage"));
const TutorListing = lazy(() => import("../components/Academic/tutorlisting"));
const TutorListingExt = lazy(() => import("../components/Academic/TutorListingExt"));
const F2FSession = lazy(() => import("../components/Academic/f2fsessions"));

const FaqSidebar = lazy(() => import("../components/sidebar options/faqssidebar"));
const AddAccountModal = lazy(() => import("../components/my classes dashboard/AddAccountModal"));
const ManageProfileModal = lazy(() => import("../components/my classes dashboard/manageprofile"));
const Profile = lazy(() => import("../components/my classes dashboard/profile"));
const ProfileUpdate = lazy(() => import("../components/my classes dashboard/updateprofile"));
const AddRateCard = lazy(() => import("../components/Tutor/ratecards/AddRateCards"));
const rateCard = lazy(() => import("../components/Tutor/ratecards/ratecard"));
const AcademicRatecard = lazy(() => import("../components/Tutor/ratecards/AddRateCardDetailed"));

const TestUI = lazy(() => import("../components/Tutor/main page/TutorMain"));

const StatusTutor = lazy(() => import("../components/sidebar options/StatusTutor"));
const ReviewPopup = lazy(() => import("../components/sidebar options/ReviewPopup"));
const ClassesLink = lazy(() => import("../components/sidebar options/ClassesLink"));
const ClassDetails = lazy(() => import("../components/sidebar options/ClassDetails"));
const ClassDetailF2F = lazy(() => import("../components/sidebar options/ClassDetailF2F"));



const ROUTES = [
  {
    name: "Home",
    path: "Home",
    id: 0,
    Component: Home,
    isPrivate: true,
  },
  {
    name: "LandingPage",
    path: "/",
    id: 1,
    Component: LandingPage,
    isPrivate: false,
  },
  {
    name: "tutorMain",
    path: "/tutorMain",
    id: 1,
    Component: tutorMain,
    isPrivate: false,
  },
  
  {
    name: "NotFound",
    path: "*",
    id: 1,
    Component: NotFound,
    isPrivate: false,
  },
  {
    name: "Status Tutor",
    path: "/statustutor",
    id: 3,
    Component: StatusTutor,
    isPrivate: true,
  },
  {
    name: "Coming Soon",
    path: "/comingsoon",
    id: 5,
    Component: ComingSoon,
    isPrivate: true,
  },
  {
    name: "Sessions",
    path: "/sessions",
    id: 1,
    Component: Sessions,
    isPrivate: true,
  },
  {
    name: "Schedule Student",
    path: "/schedulestudent",
    id: 2,
    Component: ScheduleStudent,
    isPrivate: true,
  },
  {
    name: "Book Your Session",
    path: "/bookyoursession",
    id: 3,
    Component: BookYourSession,
    isPrivate: true,
  },
  {
    name: "Tutor Main",
    path: "/tutormain",
    id: 4,
    Component: TutorMain,
    isPrivate: true,
  },
  {
    name: "Chat Notifications",
    path: "/chatnotifications",
    id: 5,
    Component: ChatNotificationsPage,
    isPrivate: true,
  },
  {
    name: "Add New Document",
    path: "/addnewdocument",
    id: 6,
    Component: AddNewDocument,
    isPrivate: true,
  },
  {
    name: "Chat Box",
    path: "/chatbox",
    id: 7,
    Component: ChatBox,
    isPrivate: true,
  },
  {
    name: "Add Package",
    path: "/addpackage",
    id: 8,
    Component: AddPackage,
    isPrivate: true,
  },
  {
    name: "Meeting Preference",
    path: "/meetingpreference",
    id: 9,
    Component: MeetingPreference,
    isPrivate: true,
  },
  {
    name: "Tutor Packages",
    path: "/tutorpackages",
    id: 9,
    Component: TutorPackages,
    isPrivate: true,
  },
  {
    name: "Review Popup",
    path: "/reviewpopup",
    id: 4,
    Component: ReviewPopup,
    isPrivate: true,
  },
  {
    name: "Classes Link",
    path: "/classeslink",
    id: 5,
    Component: ClassesLink,
    isPrivate: true,
  },
  {
    name: "Class Details",
    path: "/classdetails",
    id: 6,
    Component: ClassDetails,
    isPrivate: true,
  },
  {
    name: "Class Detail F2F",
    path: "/classdetailf2f",
    id: 7,
    Component: ClassDetailF2F,
    isPrivate: true,
  },
  {
    name: "Terms of Service",
    path: "/termsofservice",
    id: 2,
    Component: Terms,
    isPrivate: false,
  },
  {
    name: "AcademicRatecard",
    path: "/academic_ratecard",
    id: 2,
    Component: AcademicRatecard ,
    isPrivate: true,
  },
  {
    name: "AddRateCard",
    path: "/add_rate_card/:id",
    id: 2,
    Component: AddRateCard ,
    isPrivate: true,
  },
  {
    name: "rateCard",
    path: "/ratecard",
    id: 2,
    Component: rateCard ,
    isPrivate: true,
  },
  
  {
    name: "Test UI",
    path: "/testui",
    id: 2,
    Component: TestUI ,
    isPrivate: false,
  },
  {
    name: "Privacy Policy",
    path: "/privacypolicy",
    id: 3,
    Component: PrivacyPolicy,
    isPrivate: false,
  },
  {
    name: "Contact Us",
    path: "/contactus",
    id: 4,
    Component: ContactUs,
    isPrivate: false,
  },
  {
    name: "My Class",
    path: "/myclass",
    id: 5,
    Component: myclass,
    isPrivate: true,
  },

  // New routes for added components
  {
    name: "FAQ",
    path: "/faq",
    id: 6,
    Component: FaqSidebar,
    isPrivate: false,
  },
  {
    name: "Add Account",
    path: "/addaccount",
    id: 7,
    Component: AddAccountModal,
    isPrivate: true,
  },
  {
    name: "Manage Profile",
    path: "/manageprofile",
    id: 8,
    Component: ManageProfileModal,
    isPrivate: true,
  },
  {
    name: "Profile",
    path: "/profile",
    id: 9,
    Component: Profile,
    isPrivate: true,
  },
  {
    name: "Profile Update",
    path: "/profileupdate",
    id: 10,
    Component: ProfileUpdate,
    isPrivate: true,
  },
  {
    name: "My Classes",
    path: "/myclasses",
    id: 11,
    Component: MyClasses,
    isPrivate: true,
  },

  // Routes for academic components
  {
    name: "Academic",
    path: "/academic",
    id: 12,
    Component: Academic,
    isPrivate: true,
  },
  {
    name: "Booking Successful",
    path: "/bookingsuccessful",
    id: 13,
    Component: BookingSuccessful,
    isPrivate: true,
  },
  {
    name: "Book Now Modal",
    path: "/booknowmodal",
    id: 14,
    Component: BookNowModal,
    isPrivate: true,
  },
  {
    name: "Course Descriptions",
    path: "/coursedescriptions",
    id: 15,
    Component: CourseDescriptions,
    isPrivate: true,
  },
  {
    name: "Course Details",
    path: "/coursedetails",
    id: 16,
    Component: CourseDetails,
    isPrivate: true,
  },
  {
    name: "Filter Modal",
    path: "/filtermodal",
    id: 17,
    Component: FilterModal,
    isPrivate: true,
  },
  {
    name: "Payment Modal",
    path: "/paymentmodal",
    id: 18,
    Component: PaymentModal,
    isPrivate: true,
  },
  {
    name: "Book Your Tutor",
    path: "/bookyourtutor",
    id: 19,
    Component: BookYourTutor,
    isPrivate: true,
  },
  {
    name: "Book Your Tutor Payment",
    path: "/bookyourtutorpayment",
    id: 20,
    Component: BookYourTutorPayment,
    isPrivate: true,
  },
  {
    name: "Tutor Listing",
    path: "/tutorlisting",
    id: 21,
    Component: TutorListing,
    isPrivate: true,
  },
  {
    name: "Tutor Listing Extension",
    path: "/tutorlistingext",
    id: 22,
    Component: TutorListingExt,
    isPrivate: true,
  },
  {
    name: "f2fsessions",
    path: "/facetofaceSessions",
    id: 23,
    Component: F2FSession,
    isPrivate: true,
  },
  {
    name: "Notifications",
    path: "/notifications",
    id: 23,
    Component: NotificationPage,
    isPrivate: true,
  },
  {
    name: "Recreational",
    path: "/choosecategory",
    id: 23,
    Component: Categories,
    isPrivate: true,
  },
  {
    name: "Course",
    path: "/coursecategory",
    id: 23,
    Component: CourseCategories,
    isPrivate: true,
  },
  {
    name: "TutorDetail",
    path: "/tutordetail",
    id: 23,
    Component: TutorDetails,
    isPrivate: true,
  },
];

export default ROUTES;
