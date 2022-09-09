
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main:mode==="light"?"#111847":"#C7C2C2", 
      dark:"#111847",
      darkFade:mode==="light"?"rgba(17, 24, 71, 0.5)":"#9B9B9B",
      light:"#3F3E73",
      lighter:"#6C68A1",
      lightest:"#9B95D2",
      superLight:"#CCC5FF",
      finalLight:mode==="light"?"#e3f2fd":"#080525",
      heading:"#EAECF0"
    },
    secondary: {
      main: "#A37C0C",
      hover:"rgba(165, 121, 12, 0.9)",
      light:"rgba(165, 121, 12, 0.5)",
      lighter:mode==="light"?"rgba(165, 121, 12, 0.2)":"#080525",
      dark:"#A5790C",

    },
    third:{
      main:"#9B9B9B",
      light:"#DADADA",
      dark:"#7E7E7E",
    },
    background:{
      paper:mode==="light"?"#F8F8F8":"#292947",
      default: mode==="light"?"#fff":"#080525",
      shadow:mode==="light"?"rgba(0, 0, 0, 0.25)":"rgba(255, 255, 255, 0.25)",
      bread: mode==="light"?"#F5F6FA":"#292947",
      icon: mode==="light"?"#fff":"#000",
      iconShadow: mode==="light"?"rgba(124, 141, 181, 0.12)":"rgba(124, 141, 181, 0.12)",
    }
   ,
  },

})




