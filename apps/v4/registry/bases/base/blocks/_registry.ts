import { type Registry } from "farsiui/schema"

import { faBlocks } from "./_registry-fa-generated"

export const blocks: Registry["items"] = [
  ...faBlocks,
  {
    name: "preview",
    title: "Preview",
    type: "registry:block",
    registryDependencies: [
      "alert-dialog",
      "avatar",
      "badge",
      "button",
      "button-group",
      "card",
      "chart",
      "checkbox",
      "combobox",
      "dropdown-menu",
      "empty",
      "field",
      "input",
      "input-group",
      "item",
      "label",
      "popover",
      "radio-group",
      "select",
      "separator",
      "sheet",
      "slider",
      "spinner",
      "switch",
      "textarea",
      "tooltip",
      "example",
    ],
    files: [
      {
        path: "blocks/preview/index.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "preview-02",
    title: "Preview 02",
    type: "registry:block",
    dependencies: ["react-qr-code"],
    registryDependencies: [
      "accordion",
      "badge",
      "breadcrumb",
      "button",
      "calendar",
      "card",
      "chart",
      "checkbox",
      "combobox",
      "dropdown-menu",
      "empty",
      "field",
      "input",
      "input-group",
      "item",
      "label",
      "native-select",
      "progress",
      "radio-group",
      "select",
      "separator",
      "sidebar",
      "skeleton",
      "slider",
      "spinner",
      "switch",
      "table",
      "tabs",
      "textarea",
      "toggle-group",
    ],
    files: [
      {
        path: "blocks/preview-02/index.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "preview-03",
    title: "Preview 03",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/preview-03/index.tsx",
        type: "registry:block",
      },
    ],
  },
  {
    name: "login-01",
    title: "Login 01",
    description: "فرم ورود ساده.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/login-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-02",
    title: "Login 02",
    description: "صفحه ورود دو ستونه با تصویر کاور.",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "field"],
    files: [
      {
        path: "blocks/login-02/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-02/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-03",
    title: "Login 03",
    description: "صفحه ورود با پس‌زمینه ملایم.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/login-03/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-03/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-04",
    title: "Login 04",
    description: "صفحه ورود با فرم و تصویر.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/login-04/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-04/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "login-05",
    title: "Login 05",
    description: "صفحه ورود فقط با ایمیل.",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "field"],
    files: [
      {
        path: "blocks/login-05/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-05/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "signup-01",
    title: "Signup 01",
    description: "فرم ثبت‌نام ساده.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/signup-01/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-01/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "signup"],
  },
  {
    name: "signup-02",
    title: "Signup 02",
    description: "صفحه ثبت‌نام دو ستونه با تصویر کاور.",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "field"],
    files: [
      {
        path: "blocks/signup-02/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-02/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "signup"],
  },
  {
    name: "signup-03",
    title: "Signup 03",
    description: "صفحه ثبت‌نام با پس‌زمینه ملایم.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/signup-03/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-03/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "signup"],
  },
  {
    name: "signup-04",
    title: "Signup 04",
    description: "صفحه ثبت‌نام با فرم و تصویر.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "field"],
    files: [
      {
        path: "blocks/signup-04/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-04/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "signup"],
  },
  {
    name: "signup-05",
    title: "Signup 05",
    description: "فرم ثبت‌نام ساده با ورود اجتماعی.",
    type: "registry:block",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/signup-05/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-05/components/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "signup"],
  },
  {
    name: "forgot-password-01",
    title: "Forgot Password 01",
    description: "فرم بازیابی رمز عبور با ایمیل و پیام تأیید ارسال.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input"],
    files: [
      {
        path: "blocks/forgot-password-01/page.tsx",
        target: "app/forgot-password/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/forgot-password-01/components/forgot-password-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["forgot-password"],
  },
  {
    name: "forgot-password-02",
    title: "Forgot Password 02",
    description: "بازیابی رمز عبور با شماره موبایل و کد تأیید.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input", "input-otp"],
    files: [
      {
        path: "blocks/forgot-password-02/page.tsx",
        target: "app/forgot-password/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/forgot-password-02/components/forgot-password-mobile.tsx",
        type: "registry:component",
      },
    ],
    categories: ["forgot-password"],
  },
  {
    name: "forgot-password-03",
    title: "Forgot Password 03",
    description: "انتخاب روش بازیابی بین ایمیل و موبایل.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input", "tabs"],
    files: [
      {
        path: "blocks/forgot-password-03/page.tsx",
        target: "app/forgot-password/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/forgot-password-03/components/forgot-password-methods.tsx",
        type: "registry:component",
      },
    ],
    categories: ["forgot-password"],
  },
  {
    name: "forgot-password-04",
    title: "Forgot Password 04",
    description: "صفحه بازیابی دو ستونه با تصویر کاور.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input"],
    files: [
      {
        path: "blocks/forgot-password-04/page.tsx",
        target: "app/forgot-password/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/forgot-password-04/components/forgot-password-split.tsx",
        type: "registry:component",
      },
    ],
    categories: ["forgot-password"],
  },
  {
    name: "forgot-password-05",
    title: "Forgot Password 05",
    description: "بازیابی متمرکز با برند و وضعیت ارسال.",
    type: "registry:block",
    registryDependencies: ["button", "field", "input"],
    files: [
      {
        path: "blocks/forgot-password-05/page.tsx",
        target: "app/forgot-password/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/forgot-password-05/components/forgot-password-centered.tsx",
        type: "registry:component",
      },
    ],
    categories: ["forgot-password"],
  },
  {
    name: "personal-info-01",
    title: "Personal Info 01",
    description: "فرم اطلاعات شخصی ساده داخل کارت.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input"],
    files: [
      {
        path: "blocks/personal-info-01/page.tsx",
        target: "app/personal-info/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/personal-info-01/components/personal-info-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["personal-info"],
  },
  {
    name: "personal-info-02",
    title: "Personal Info 02",
    description: "فرم پروفایل مرکزی با نام، تماس و بیو.",
    type: "registry:block",
    registryDependencies: ["button", "field", "input", "textarea"],
    files: [
      {
        path: "blocks/personal-info-02/page.tsx",
        target: "app/personal-info/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/personal-info-02/components/personal-info-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["personal-info"],
  },
  {
    name: "personal-info-03",
    title: "Personal Info 03",
    description: "فرم اطلاعات شخصی همراه با آدرس و استان.",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "field",
      "input",
      "select",
      "textarea",
    ],
    files: [
      {
        path: "blocks/personal-info-03/page.tsx",
        target: "app/personal-info/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/personal-info-03/components/personal-info-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["personal-info"],
  },
  {
    name: "personal-info-04",
    title: "Personal Info 04",
    description: "فرم دو ستونه اطلاعات شخصی با تصویر کاور.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input"],
    files: [
      {
        path: "blocks/personal-info-04/page.tsx",
        target: "app/personal-info/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/personal-info-04/components/personal-info-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["personal-info"],
  },
  {
    name: "personal-info-05",
    title: "Personal Info 05",
    description: "ویرایش پروفایل با آواتار و تنظیمات نمایش.",
    type: "registry:block",
    registryDependencies: [
      "avatar",
      "button",
      "card",
      "field",
      "input",
      "label",
      "separator",
      "switch",
      "textarea",
    ],
    files: [
      {
        path: "blocks/personal-info-05/page.tsx",
        target: "app/personal-info/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/personal-info-05/components/personal-info-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["personal-info"],
  },
  {
    name: "identity-verification-01",
    title: "Identity Verification 01",
    description: "فرم اطلاعات هویتی با نام، کد ملی، تاریخ تولد و موبایل.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input"],
    files: [
      {
        path: "blocks/identity-verification-01/page.tsx",
        target: "app/identity-verification/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/identity-verification-01/components/identity-info-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/identity-verification-01/components/national-id-input.tsx",
        type: "registry:component",
      },
    ],
    categories: ["identity-verification"],
  },
  {
    name: "identity-verification-02",
    title: "Identity Verification 02",
    description: "احراز هویت با آپلود کارت ملی و پیش‌نمایش مدرک.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input", "separator"],
    files: [
      {
        path: "blocks/identity-verification-02/page.tsx",
        target: "app/identity-verification/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/identity-verification-02/components/national-card-upload.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/identity-verification-02/components/national-id-input.tsx",
        type: "registry:component",
      },
    ],
    categories: ["identity-verification"],
  },
  {
    name: "identity-verification-04",
    title: "Identity Verification 04",
    description: "احراز هویت چندمرحله‌ای برای اطلاعات، موبایل، مدرک و تأیید.",
    type: "registry:block",
    registryDependencies: ["badge", "button", "card", "field", "input"],
    files: [
      {
        path: "blocks/identity-verification-04/page.tsx",
        target: "app/identity-verification/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/identity-verification-04/components/multi-step-identity.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/identity-verification-04/components/national-id-input.tsx",
        type: "registry:component",
      },
    ],
    categories: ["identity-verification"],
  },
  {
    name: "identity-verification-05",
    title: "Identity Verification 05",
    description: "بررسی خلاصه اطلاعات و ویرایش هر بخش قبل از تأیید نهایی.",
    type: "registry:block",
    registryDependencies: ["button", "card", "field", "input", "separator"],
    files: [
      {
        path: "blocks/identity-verification-05/page.tsx",
        target: "app/identity-verification/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/identity-verification-05/components/identity-review.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/identity-verification-05/components/national-id-input.tsx",
        type: "registry:component",
      },
    ],
    categories: ["identity-verification"],
  },
  {
    name: "identity-verification-06",
    title: "Identity Verification 06",
    description: "وضعیت‌های احراز هویت: بررسی، تأیید، نیاز به اصلاح و رد.",
    type: "registry:block",
    registryDependencies: ["alert", "badge", "button", "card", "tabs"],
    files: [
      {
        path: "blocks/identity-verification-06/page.tsx",
        target: "app/identity-verification/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/identity-verification-06/components/identity-status-gallery.tsx",
        type: "registry:component",
      },
    ],
    categories: ["identity-verification"],
  },
  {
    name: "identity-verification-07",
    title: "Identity Verification 07",
    description: "داشبورد حساب کاربری با وضعیت احراز هویت و اقدام بعدی.",
    type: "registry:block",
    registryDependencies: [
      "avatar",
      "badge",
      "button",
      "card",
      "separator",
    ],
    files: [
      {
        path: "blocks/identity-verification-07/page.tsx",
        target: "app/identity-verification/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/identity-verification-07/components/account-identity-dashboard.tsx",
        type: "registry:component",
      },
    ],
    categories: ["identity-verification"],
  },
  {
    name: "dashboard-01",
    title: "Dashboard 01",
    type: "registry:block",
    description: "A dashboard with sidebar, charts and data table.",
    dependencies: [
      "@dnd-kit/core",
      "@dnd-kit/modifiers",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
      "@tanstack/react-table",
      "zod",
    ],
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "chart",
      "card",
      "select",
      "tabs",
      "table",
      "toggle-group",
      "badge",
      "button",
      "checkbox",
      "dropdown-menu",
      "drawer",
      "input",
      "avatar",
      "sheet",
      "sonner",
    ],
    files: [
      {
        path: "blocks/dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/dashboard-01/data.json",
        type: "registry:file",
        target: "app/dashboard/data.json",
      },
      {
        path: "blocks/dashboard-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/chart-area-interactive.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/data-table.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/nav-documents.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/section-cards.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/dashboard-01/components/site-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["dashboard"],
    meta: {
      iframeHeight: "1000px",
    },
  },
  {
    name: "sidebar-01",
    title: "Sidebar 01",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-01/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-01/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-02",
    title: "Sidebar 02",
    description: "A sidebar with collapsible sections.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-02/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-02/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-02/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-02/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-03",
    title: "Sidebar 03",
    description: "A sidebar with submenus.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "blocks/sidebar-03/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-03/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-04",
    title: "Sidebar 04",
    description: "A floating sidebar with submenus.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator"],
    files: [
      {
        path: "blocks/sidebar-04/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-04/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-05",
    title: "Sidebar 05",
    description: "A sidebar with collapsible submenus.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "collapsible",
    ],
    files: [
      {
        path: "blocks/sidebar-05/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-05/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-05/components/search-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-06",
    title: "Sidebar 06",
    description: "A sidebar with submenus as dropdowns.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "card",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-06/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-06/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-06/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-06/components/sidebar-opt-in-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-07",
    title: "Sidebar 07",
    type: "registry:block",
    description: "A sidebar that collapses to icons.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "blocks/sidebar-07/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-07/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-07/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-07/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-07/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-07/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-08",
    title: "Sidebar 08",
    description: "An inset sidebar with secondary navigation.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "blocks/sidebar-08/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-08/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-08/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-08/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-08/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-08/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-09",
    title: "Sidebar 09",
    description: "Collapsible nested sidebars.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
      "switch",
      "label",
    ],
    files: [
      {
        path: "blocks/sidebar-09/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-09/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-09/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-10",
    title: "Sidebar 10",
    description: "A sidebar in a popover.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "popover",
      "collapsible",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/sidebar-10/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-10/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-actions.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-favorites.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/nav-workspaces.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-10/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-11",
    title: "Sidebar 11",
    description: "A sidebar with a collapsible file tree.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator", "collapsible"],
    files: [
      {
        path: "blocks/sidebar-11/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-11/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-12",
    title: "Sidebar 12",
    description: "A sidebar with a calendar.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "calendar",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "blocks/sidebar-12/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-12/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-12/components/calendars.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-12/components/date-picker.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-12/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-13",
    title: "Sidebar 13",
    description: "A sidebar in a dialog.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "button", "dialog"],
    files: [
      {
        path: "blocks/sidebar-13/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-13/components/settings-dialog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-14",
    title: "Sidebar 14",
    description: "A sidebar on the right.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "blocks/sidebar-14/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-14/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-15",
    title: "Sidebar 15",
    description: "A left and right sidebar.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "popover",
      "collapsible",
      "dropdown-menu",
      "calendar",
      "avatar",
    ],
    files: [
      {
        path: "blocks/sidebar-15/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-15/components/calendars.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/date-picker.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-favorites.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/nav-workspaces.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/sidebar-left.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/sidebar-right.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-15/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
  {
    name: "sidebar-16",
    title: "Sidebar 16",
    description: "A sidebar with a sticky site header.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
      "button",
      "label",
    ],
    files: [
      {
        path: "blocks/sidebar-16/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
      {
        path: "blocks/sidebar-16/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/sidebar-16/components/site-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar"],
  },
]
