export default {
  editor: {
    label: {
      en: "shadcn Avatar",
      fr: "Avatar shadcn"
    },
    icon: 'fas fa-user-circle',
    bubble: {
      icon: 'fas fa-user-circle'
    },
    deprecated: false
  },
  properties: {
    src: {
      label: {
        en: "Image source",
        fr: "Source de l'image"
      },
      type: "Image",
      bindable: true,
      section: "image"
    },
    alt: {
      label: {
        en: "Alt text",
        fr: "Texte alternatif"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "image"
    },
    name: {
      label: {
        en: "Name (for initials)",
        fr: "Nom (pour les initiales)"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      section: "fallback"
    },
    fallbackText: {
      label: {
        en: "Custom fallback text",
        fr: "Texte de fallback personnalisé"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "fallback"
    },
    fallbackIcon: {
      label: {
        en: "Fallback icon",
        fr: "Icône de fallback"
      },
      type: "Icon",
      bindable: true,
      section: "fallback"
    },
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "sm", label: { en: "Small", fr: "Petit" } },
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "lg", label: { en: "Large", fr: "Grand" } },
          { value: "xl", label: { en: "Extra Large", fr: "Très grand" } }
        ]
      },
      defaultValue: "default",
      section: "appearance"
    },
    showStatus: {
      label: {
        en: "Show status indicator",
        fr: "Afficher l'indicateur de statut"
      },
      type: "OnOff",
      defaultValue: false,
      section: "status"
    },
    status: {
      label: {
        en: "Status",
        fr: "Statut"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "online", label: { en: "Online", fr: "En ligne" } },
          { value: "offline", label: { en: "Offline", fr: "Hors ligne" } },
          { value: "away", label: { en: "Away", fr: "Absent" } },
          { value: "busy", label: { en: "Busy", fr: "Occupé" } }
        ]
      },
      defaultValue: "offline",
      bindable: true,
      hidden: content => !content.showStatus,
      section: "status"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  sections: {
    image: {
      label: { en: "Image", fr: "Image" },
      expand: true
    },
    fallback: {
      label: { en: "Fallback", fr: "Fallback" },
      expand: false
    },
    appearance: {
      label: { en: "Appearance", fr: "Apparence" },
      expand: true
    },
    status: {
      label: { en: "Status", fr: "Statut" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 