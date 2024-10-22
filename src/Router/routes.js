import { lazy } from "react";
import MyClasses from "../components/sidebar options/myclasses";

// Lazy imports for your existing components
const Home = lazy(() => import("../components/pages/LoginHomepage"));
const LandingPage = lazy(() => import("../components/pages/LandingPage"));
const Terms = lazy(() => import("../components/policies and links/terms"));
const PrivacyPolicy = lazy(() => import("../components/policies and links/privacypolicy"));
const ContactUs = lazy(() => import("../components/policies and links/contactus"));
const myclass = lazy(() => import("../components/my classes dashboard/myclass"));

// Lazy imports for new components
const FaqSidebar = lazy(() => import("../components/sidebar options/faqssidebar")); // Assuming correct file path
const AddAccountModal = lazy(() => import("../components/my classes dashboard/AddAccountModal"));
const ManageProfileModal = lazy(() => import("../components/my classes dashboard/manageprofile"));
const Profile = lazy(() => import("../components/my classes dashboard/profile"));
const ProfileUpdate = lazy(() => import("../components/Academic/TutorListingExt"));

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
    isPrivate: false,  // Assuming it's private
  },
  {
    name: "Manage Profile",
    path: "/manageprofile",
    id: 8,
    Component: ManageProfileModal,
    isPrivate: false,  // Assuming it's private
  },
  {
    name: "Profile",
    path: "/profile",
    id: 9,
    Component: Profile,
    isPrivate: false,  // Assuming it's private
  },
  {
    name: "Profile Update",
    path: "/profileupdate",
    id: 10,
    Component: ProfileUpdate,
    isPrivate: false,  // Assuming it's private
  },
  {
    name: "My Classes",
    path: "/myclasses",
    id: 11,
    Component: MyClasses,
    isPrivate: false,  // Assuming it's private
  },
];

export default ROUTES;
