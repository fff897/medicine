"use client";
import { useState, useEffect } from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // ✅ Added for SPA navigation

const navLinks = [
  { label: "Treatments", href: "#treatments" },
  { label: "Stories", href: "#stories" },
  { label: "Inspiration", href: "#inspiration" },
  { label: "About", href: "#about" },
];

const sideMenuLinks = [
  { label: "Treatment", href: "#shop", count: "•" },
  { label: "Clinical Research", href: "#science", count: "•" },
  { label: "Hairloss", href: "/Survey/Hairloss_reg", count: "•" },
  { label: "Sexual health", href: "/Survey/SexualHealth_reg", count: "•" },
  { label: "Body health", href: "/Survey/BodyHealth_reg", count: "•" },
  { label: "Weight loss", href: "/Survey/Weightloss_reg", count: "•" },
  { label: "FAQs", href: "#support", count: "•" },
];

type Tab = "account" | "cart" | "search";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountSheetOpen, setAccountSheetOpen] = useState(false);
  const [cartSheetOpen, setCartSheetOpen] = useState(false);
  const [searchSheetOpen, setSearchSheetOpen] = useState(false);
  const [activeRightTab, setActiveRightTab] = useState<Tab>("account");

  const rightSheetOpen = accountSheetOpen || cartSheetOpen || searchSheetOpen;

  useEffect(() => {
    if (accountSheetOpen) setActiveRightTab("account");
    else if (cartSheetOpen) setActiveRightTab("cart");
    else if (searchSheetOpen) setActiveRightTab("search");
  }, [accountSheetOpen, cartSheetOpen, searchSheetOpen]);

  const closeRightSheet = () => {
    setAccountSheetOpen(false);
    setCartSheetOpen(false);
    setSearchSheetOpen(false);
  };

  const HamburgerIcon = () => (
    <button
      className="group relative flex flex-col items-start justify-center gap-1.5 p-3 -ml-3 focus:outline-none"
      onClick={() => setMobileOpen(true)}
      aria-label="Toggle menu"
    >
      <motion.span
        className="h-0.5 w-7 bg-neutral-800 rounded-full origin-left"
        animate={mobileOpen ? { rotate: 60, y: 8, width: 28 } : { rotate: 0, y: 0, width: 28 }}
        transition={{ duration: 0.52, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.span
        className="h-0.5 bg-neutral-800 rounded-full origin-left"
        animate={mobileOpen ? { opacity: 0, x: -14, width: 0 } : { opacity: 1, x: 0, width: 20 }}
        transition={{ duration: 0.42, ease: "easeInOut" }}
      />
      <motion.span
        className="h-0.5 w-7 bg-neutral-800 rounded-full origin-left"
        animate={mobileOpen ? { rotate: -60, y: -8, width: 28 } : { rotate: 0, y: 0, width: 28 }}
        transition={{ duration: 0.52, ease: [0.65, 0, 0.35, 1] }}
      />
    </button>
  );

  const renderTabContent = (tab: Tab) => {
    const baseContainer = "px-8 py-16 md:px-12 lg:px-20 max-w-md mx-auto space-y-12";
    const titleClass = "text-4xl md:text-5xl font-light tracking-[-0.04em] text-neutral-950 font-serif";
    const subtitleClass = "text-base md:text-lg text-neutral-500 leading-relaxed tracking-wide font-light";

    if (tab === "search") {
      return (
        <div className={baseContainer}>
          <div className="text-center space-y-5">
            <h2 className={titleClass}>Search</h2>
            <p className={subtitleClass}>Discover treatments, stories, inspiration</p>
          </div>
          <div className="relative mt-10">
            <input
              type="text"
              placeholder="What are you seeking?"
              autoFocus
              className="w-full pl-16 pr-8 py-6 bg-white/55 border border-neutral-200/50 rounded-full text-neutral-950 placeholder:text-neutral-400/75 text-base tracking-wide focus:outline-none focus:border-neutral-300/60 focus:bg-white/75 focus:shadow-[0_6px_24px_rgba(0,0,0,0.05)] backdrop-blur-lg transition-all duration-500"
            />
            <Search size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500" strokeWidth={1.3} />
          </div>
          <p className="text-sm text-neutral-400/85 text-center pt-10 tracking-widest font-light">
            Popular: Hair Loss • Sexual Wellness • Weight Balance
          </p>
        </div>
      );
    }

    if (tab === "account") {
      return (
        <div className={baseContainer}>
          <div className="text-center space-y-6">
            <h2 className={titleClass}>Account</h2>
            <p className={subtitleClass}>Access your private profile, history and exclusive privileges</p>
          </div>
          <div className="space-y-8 mt-12">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-8 py-6 bg-white/55 border border-neutral-200/50 rounded-full placeholder:text-neutral-400/75 text-neutral-950 text-base tracking-wide focus:outline-none focus:border-neutral-300/60 focus:bg-white/75 focus:shadow-[0_6px_24px_rgba(0,0,0,0.05)] backdrop-blur-lg transition-all duration-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-8 py-6 bg-white/55 border border-neutral-200/50 rounded-full placeholder:text-neutral-400/75 text-neutral-950 text-base tracking-wide focus:outline-none focus:border-neutral-300/60 focus:bg-white/75 focus:shadow-[0_6px_24px_rgba(0,0,0,0.05)] backdrop-blur-lg transition-all duration-500"
            />
            <button className="w-full py-6 bg-neutral-900 text-white rounded-full text-sm uppercase tracking-[0.22em] font-medium hover:bg-neutral-800 hover:shadow-[0_10px_35px_rgba(0,0,0,0.14)] active:scale-[0.982] shadow-sm transition-all duration-500">
              Sign In
            </button>
            <button className="w-full py-6 border border-neutral-300/50 text-neutral-800 rounded-full text-sm uppercase tracking-[0.22em] font-medium hover:bg-white/70 hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] active:scale-[0.982] backdrop-blur-sm transition-all duration-500">
              Create Private Account
            </button>
          </div>
          <div className="text-center pt-8">
            <Link to="#" className="text-sm text-neutral-500 hover:text-neutral-700 underline underline-offset-4 transition-colors duration-300">
              Forgotten your password?
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className={baseContainer}>
        <div className="text-center space-y-8 pt-4">
          <h2 className={titleClass}>Cart</h2>
          <p className="text-lg text-neutral-500 leading-relaxed tracking-wide font-light max-w-sm mx-auto">
            Your selection is currently empty.<br />
            Explore our curated treatments and begin your personal journey.
          </p>
          <button className="mt-12 px-16 py-6 bg-neutral-900 text-white rounded-full text-sm uppercase tracking-[0.22em] font-medium hover:bg-neutral-800 hover:shadow-[0_14px_45px_rgba(0,0,0,0.16)] active:scale-[0.982] shadow-md transition-all duration-500">
            Continue Exploration
          </button>
        </div>
      </div>
    );
  };

  const RightSheet = () => (
    <Sheet open={rightSheetOpen} onOpenChange={closeRightSheet}>
      <SheetContent
        side="right"
        className={cn(
          "w-full sm:w-[440px] lg:w-[500px] xl:w-[580px]",
          "bg-gradient-to-b from-white/88 via-white/80 to-white/75 backdrop-blur-2xl",
          "border-l border-neutral-100/25",
          "shadow-2xl shadow-black/12",
          "p-0 overflow-hidden",
          "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
        )}
      >
        <VisuallyHidden>
          <SheetTitle>{activeRightTab.charAt(0).toUpperCase() + activeRightTab.slice(1)}</SheetTitle>
        </VisuallyHidden>
        <div className="relative border-b border-neutral-100/25 bg-white/45 backdrop-blur-xl">
          <div className="flex px-10 sm:px-12 pt-8 pb-4">
            {(["account", "cart", "search"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveRightTab(tab)}
                className={cn(
                  "flex-1 pb-6 text-center text-xs sm:text-sm font-medium tracking-[0.26em] uppercase",
                  activeRightTab === tab
                    ? "text-neutral-950 border-b-2 border-neutral-900/70"
                    : "text-neutral-400 hover:text-neutral-700 transition-colors duration-300"
                )}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRightTab}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderTabContent(activeRightTab)}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="px-10 sm:px-12 py-10 border-t border-neutral-100/20 bg-white/35 backdrop-blur-md text-[10px] text-neutral-400 tracking-widest font-light text-center">
          WRP Health • design by ©MF
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <>
      <AnimatePresence>
        {(mobileOpen || rightSheetOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed inset-0 z-40 backdrop-blur-xl backdrop-brightness-110 backdrop-saturate-125 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.header
        className="sticky top-0 z-50 w-full pt-[env(safe-area-inset-top)]"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(
            "relative mx-auto h-[92px] sm:h-[100px] lg:h-[108px]",
            "px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20",
            "bg-white/55 backdrop-blur-2xl border-b border-white/35",
            "shadow-[0_14px_50px_rgba(0,0,0,0.06)]",
            "rounded-b-3xl grid grid-cols-3 items-center",
            "gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12"
          )}
          style={{ maxWidth: "min(96vw, 1920px)" }}
        >
          {/* Left section */}
          <div className="flex items-center gap-5 lg:gap-10">
            <HamburgerIcon />
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="group text-xs uppercase tracking-[0.30em] font-medium text-neutral-800 hover:text-neutral-950 transition-colors duration-300"
                >
                  {link.label}
                  <span className="block h-px w-0 bg-neutral-900 mt-1 group-hover:w-full transition-all duration-700 ease-out" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Center - logo */}
          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="font-serif text-4xl sm:text-4.5xl md:text-5xl lg:text-[3.3rem] xl:text-[3.5rem] font-light tracking-[-0.065em] text-neutral-950 select-none"
            >
              WRP
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center justify-end gap-6 sm:gap-8 lg:gap-10">
            <button
              aria-label="Search"
              onClick={() => setSearchSheetOpen(true)}
              className="text-neutral-700 hover:text-neutral-950 transition hover:scale-110 duration-400"
            >
              <Search size={28} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Account"
              onClick={() => setAccountSheetOpen(true)}
              className="hidden sm:block text-neutral-700 hover:text-neutral-950 transition hover:scale-110 duration-400"
            >
              <User size={28} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Cart"
              onClick={() => setCartSheetOpen(true)}
              className="text-neutral-700 hover:text-neutral-950 transition hover:scale-110 duration-400"
            >
              <ShoppingBag size={28} strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </motion.header>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="left"
          className={cn(
            "w-full sm:max-w-md",
            "bg-gradient-to-b from-white/92 via-white/88 to-white/84 backdrop-blur-2xl",
            "border-none p-0 shadow-2xl shadow-black/10 overflow-hidden",
            "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          )}
        >
          <VisuallyHidden>
            <SheetTitle>Mobile Menu</SheetTitle>
          </VisuallyHidden>
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-hidden">
              <div className="h-full overflow-y-auto px-8 sm:px-10 pt-14 pb-10">
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-[-0.04em] text-neutral-950 mb-10">
                  Menu
                </h2>

                <nav className="space-y-5 md:space-y-6 pb-10">
                  {sideMenuLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "group block py-3.5 px-4 rounded-xl transition-all duration-500",
                        "hover:bg-white/70",
                        "hover:shadow-[0_10px_40px_rgba(0,0,0,0.07)]",
                        "active:bg-white/75 active:scale-[0.985]"
                      )}
                    >
                      <div className="flex items-center justify-between relative">
                        <motion.span
                          className={cn(
                            "text-xl md:text-2xl font-light tracking-[-0.02em]",
                            "text-neutral-700 group-hover:text-neutral-950",
                            "transition-colors duration-400 ease-out"
                          )}
                          whileHover={{ x: 24 }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {link.label}
                        </motion.span>

                        <span className="text-lg md:text-xl text-neutral-300/80 font-light group-hover:text-neutral-400 transition-colors duration-400">
                          {link.count}
                        </span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            <div className="shrink-0 border-t border-neutral-100/30 bg-white/10 backdrop-blur-md">
              <div className="px-8 py-6 md:px-10 md:py-8">
                <div className="flex flex-wrap justify-center gap-5 md:gap-8 mb-4 text-xs tracking-wide font-light text-neutral-500">
                  <Link to="#" className="hover:text-neutral-800 transition-colors">
                    Instagram
                  </Link>
                  <Link to="#" className="hover:text-neutral-800 transition-colors">
                    Twitter
                  </Link>
                  <Link to="#" className="hover:text-neutral-800 transition-colors">
                    Facebook
                  </Link>
                </div>

                <div className="text-center text-[8px] text-neutral-400 tracking-widest font-light uppercase">
                  WRP Health • design by ©MF
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {RightSheet()}
    </>
  );
}
