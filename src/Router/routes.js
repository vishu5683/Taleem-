import { lazy } from "react";
import MyClasses from "../components/sidebar options/myclasses";

// Lazy imports for your existing components
const Home = lazy(() => import("../components/pages/LoginHomepage"));
const LandingPage = lazy(() => import("../components/pages/LandingPage"));
const Terms = lazy(() => import("../components/policies and links/terms"));
const PrivacyPolicy = lazy(() => import("../components/policies and links/privacypolicy"));
const ContactUs = lazy(() => import("../components/policies and links/contactus"));
const myclass = lazy(() => import("../components/my classes dashboard/myclass"));

// Lazy imports for academic components
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

// Lazy imports for your other new components
const FaqSidebar = lazy(() => import("../components/sidebar options/faqssidebar"));
const AddAccountModal = lazy(() => import("../components/my classes dashboard/AddAccountModal"));
const ManageProfileModal = lazy(() => import("../components/my classes dashboard/manageprofile"));
const Profile = lazy(() => import("../components/my classes dashboard/profile"));
const ProfileUpdate = lazy(() => import("../components/my classes dashboard/updateprofile"));

const ROUTES = [
  {
    name: "Home",
    path: "Home",
    id: 0,
    Component: Home,
    isPrivate: false,
  },
  {
    name: "Home",
    path: "/",
    id: 1,
    Component: LandingPage,
    isPrivate: false,
  },
  {
    name: "Terms of Service",
    path: "/termsofservice",
    id: 2,
    Component: Terms,
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
    isPrivate: false,
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
    isPrivate: false,
  },
  {
    name: "Manage Profile",
    path: "/manageprofile",
    id: 8,
    Component: ManageProfileModal,
    isPrivate: false,
  },
  {
    name: "Profile",
    path: "/profile",
    id: 9,
    Component: Profile,
    isPrivate: false,
  },
  {
    name: "Profile Update",
    path: "/profileupdate",
    id: 10,
    Component: ProfileUpdate,
    isPrivate: false,
  },
  {
    name: "My Classes",
    path: "/myclasses",
    id: 11,
    Component: MyClasses,
    isPrivate: false,
  },

  // Routes for academic components
  {
    name: "Academic",
    path: "/academic",
    id: 12,
    Component: Academic,
    isPrivate: false,
  },
  {
    name: "Booking Successful",
    path: "/bookingsuccessful",
    id: 13,
    Component: BookingSuccessful,
    isPrivate: false,
  },
  {
    name: "Book Now Modal",
    path: "/booknowmodal",
    id: 14,
    Component: BookNowModal,
    isPrivate: false,
  },
  {
    name: "Course Descriptions",
    path: "/coursedescriptions",
    id: 15,
    Component: CourseDescriptions,
    isPrivate: false,
  },
  {
    name: "Course Details",
    path: "/coursedetails",
    id: 16,
    Component: CourseDetails,
    isPrivate: false,
  },
  {
    name: "Filter Modal",
    path: "/filtermodal",
    id: 17,
    Component: FilterModal,
    isPrivate: false,
  },
  {
    name: "Payment Modal",
    path: "/paymentmodal",
    id: 18,
    Component: PaymentModal,
    isPrivate: false,
  },
  {
    name: "Book Your Tutor",
    path: "/bookyourtutor",
    id: 19,
    Component: BookYourTutor,
    isPrivate: false,
  },
  {
    name: "Book Your Tutor Payment",
    path: "/bookyourtutorpayment",
    id: 20,
    Component: BookYourTutorPayment,
    isPrivate: false,
  },
  {
    name: "Tutor Listing",
    path: "/tutorlisting",
    id: 21,
    Component: TutorListing,
    isPrivate: false,
  },
  {
    name: "Tutor Listing Extension",
    path: "/tutorlistingext",
    id: 22,
    Component: TutorListingExt,
    isPrivate: false,
  },
];

export default ROUTES;
