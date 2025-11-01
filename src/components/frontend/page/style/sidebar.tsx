import { Link } from "@/lib/i18n";
import { styleFonts, StyleKey } from "@/slugs";
import { ALargeSmallIcon, BoldIcon, CircleDot, FeatherIcon, ItalicIcon, Ligature, Pencil, SquareDot, StarsIcon, UnderlineIcon, Palette, Calculator, Sparkles, Book, Zap, Monitor, Diamond, SmileIcon, Globe, Circle, Hexagon, PenTool, Gamepad2, TvIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { ClassNameValue } from "tailwind-merge";

export const Sidebar =( )=>{   
  const pathname = usePathname(); 
  let search = useSearchParams().toString();
  if(search) search = `?${search}`;
  
  const t = useTranslations();

  const i18nName=(slug: StyleKey)=>{
    switch(slug){
      case "bold-text":
        return t("frontend.slug.menu.bold");
      case "fancy":
        return t("frontend.slug.menu.fancy");
      case "italic":
        return t("frontend.slug.menu.italic");
      case "cool":
        return t("frontend.slug.menu.cool");
      case "bold-italic":
        return t("frontend.slug.menu.bold-italic");
      case "small-text":
        return t("frontend.slug.menu.small");
      case "sans-serif":
        return "Sans Serif";
      case "serif":
        return "Serif";
      case "underline":
        return t("frontend.slug.menu.underline");
      case "cursive-font":
        return t("frontend.slug.menu.cursive");
      case "bubble-text":
        return t("frontend.slug.menu.bubble-text");
      case "square-text":
        return t("frontend.slug.menu.square-text");
      case "alternating":
        return t("frontend.slug.menu.alternating");
      case "exotic":
        return t("frontend.slug.menu.exotic");
      case "mathematical":
        return t("frontend.slug.menu.mathematical");
      case "decorative":
        return t("frontend.slug.menu.decorative");
      case "vintage":
        return t("frontend.slug.menu.vintage");
      case "modern":
        return t("frontend.slug.menu.modern");
      case "artistic":
        return t("frontend.slug.menu.artistic");
      case "rounded":
        return t("frontend.slug.menu.rounded");
      case "sharp":
        return t("frontend.slug.menu.sharp");
      case "handwritten":
        return t("frontend.slug.menu.handwritten");
      case "gaming":
        return t("frontend.slug.menu.gaming");
      case "retro":
        return t("frontend.slug.menu.retro");
      case "elegant":
        return t("frontend.slug.menu.elegant");
      case "playful":
        return t("frontend.slug.menu.playful");
      default:
        return null;
    }
  }

  const NavIcon=({slug}:{slug: StyleKey}): React.ReactNode =>{
    switch(slug){
      case "bold-text":
        return <BoldIcon size={18} />;
      case "fancy":
        return <FeatherIcon size={18}  />;
      case "italic":
        return <ItalicIcon size={18}  />;
      case "cool":
        return <StarsIcon size={18}  />;
      case "bold-italic":
        return <ItalicIcon size={18}  strokeWidth={3}/>;
      case "small-text":
        return <ALargeSmallIcon size={18}  />;
      case "underline":
        return <UnderlineIcon size={18}  />;
      case "bubble-text":
        return <CircleDot size={18}  />;
      case "square-text":
        return <SquareDot size={18}  />;
      case "cursive-font":
        return <Pencil size={18}  />;
      case "alternating":
        return <Ligature size={18}  />;
      case "exotic":
        return <Globe size={18}  />;
      case "mathematical":
        return <Calculator size={18}  />;
      case "decorative":
        return <Sparkles size={18}  />;
      case "vintage":
        return <Book size={18}  />;
      case "modern":
        return <Monitor size={18}  />;
      case "artistic":
        return <Palette size={18}  />;
      case "rounded":
        return <Circle size={18}  />;
      case "sharp":
        return <Hexagon size={18}  />;
      case "handwritten":
        return <PenTool size={18}  />;
      case "gaming":
        return <Gamepad2 size={18}  />;
      case "retro":
        return <TvIcon size={18}  />;
      case "elegant":
        return <Diamond size={18}  />;
      case "playful":
        return <SmileIcon size={18}  />;
      default:
        return null;
    }
  } 
  const linkCls: ClassNameValue = " w-full  flex rounded-lg items-center gap-y-0 gap-x-3 pl-3 mb-1 font-semibold py-2 hover:bg-secondary";

  return(
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-x-3 md:flex-row">
        <Link href={`/${search}`} className={`${linkCls} ${pathname === `/` ? "bg-secondary" : ""}`}>
          <span>{t('frontend.style.sidebar.all')}</span> 
        </Link>
        { Object.entries(styleFonts).map(([slug]) =>{ 
          const name = i18nName(slug as StyleKey); 
          if(!name) return;
          return(
            <Link href={`/${slug}${search}`} key={slug} className={`${linkCls} ${pathname === `/${slug}` ? "bg-secondary" : ""}`}>
              <NavIcon slug={slug as StyleKey} />
              <span className="text-sm">{name}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
} 
