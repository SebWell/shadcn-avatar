<template>
  <div :class="avatarClasses" @click="handleClick">
    <img 
      v-if="content.src && !imageError"
      :src="content.src"
      :alt="content.alt"
      :class="imageClasses"
      @error="handleImageError"
      @load="handleImageLoad"
    />
    
    <div v-else :class="fallbackClasses">
      <span v-if="content.fallbackText">{{ content.fallbackText }}</span>
      <span v-else>{{ getInitials() }}</span>
    </div>
    
    <div v-if="content.showStatus" :class="statusClasses">
      <div :class="statusDotClasses" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'ShadcnAvatar',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        src: "",
        name: "John Doe",
        alt: "Avatar",
        size: "default",
        variant: "default",
        showStatus: false,
        status: "online",
        fallbackText: ""
      })
    },
    wwEditorState: { type: Object, required: true }
  },
  emits: ['trigger-event', 'image-error', 'image-load'],
  setup(props, { emit }) {
    const imageError = ref(false)

    const avatarClasses = computed(() => {
      const baseClass = 'avatar-container'
      const sizeClass = `avatar-size-${props.content.size || 'default'}`
      const variantClass = `avatar-variant-${props.content.variant || 'default'}`
      return `${baseClass} ${sizeClass} ${variantClass}`
    })

    const imageClasses = computed(() => {
      return 'avatar-image'
    })

    const fallbackClasses = computed(() => {
      return 'avatar-fallback'
    })

    const statusClasses = computed(() => {
      return 'avatar-status'
    })

    const statusDotClasses = computed(() => {
      const baseClass = 'avatar-status-dot'
      const statusClass = `avatar-status-${props.content.status || 'online'}`
      return `${baseClass} ${statusClass}`
    })

    const getInitials = () => {
      if (props.content.name) {
        return props.content.name
          .split(' ')
          .map(word => word.charAt(0))
          .join('')
          .substring(0, 2)
          .toUpperCase()
      }
      return 'JD'
    }

    const handleImageError = (event) => {
      imageError.value = true
      emit('image-error', { domEvent: event, value: { src: props.content.src } })
      emit('trigger-event', { 
        domEvent: event, 
        value: { event: 'image-error', src: props.content.src } 
      })
    }

    const handleImageLoad = (event) => {
      imageError.value = false
      emit('image-load', { domEvent: event, value: { src: props.content.src } })
      emit('trigger-event', { 
        domEvent: event, 
        value: { event: 'image-load', src: props.content.src } 
      })
    }

    const handleClick = (event) => {
      emit('trigger-event', {
        domEvent: event,
        value: {
          name: props.content.name,
          src: props.content.src,
          content: props.content
        }
      })
    }

    return {
      imageError,
      avatarClasses,
      imageClasses,
      fallbackClasses,
      statusClasses,
      statusDotClasses,
      getInitials,
      handleImageError,
      handleImageLoad,
      handleClick
    }
  }
}
</script>

<style scoped>
/* Variables CSS Shadcn/UI */
:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(222.2, 84%, 4.9%);
  --muted: hsl(210, 40%, 96%);
  --muted-foreground: hsl(215.4, 16.3%, 46.9%);
  --border: hsl(214.3, 31.8%, 91.4%);
}

/* Avatar Container */
.avatar-container {
  position: relative;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
}

/* Sizes */
.avatar-size-sm {
  height: 32px;
  width: 32px;
}

.avatar-size-default {
  height: 40px;
  width: 40px;
}

.avatar-size-lg {
  height: 48px;
  width: 48px;
}

.avatar-size-xl {
  height: 64px;
  width: 64px;
}

/* Variants */
.avatar-variant-default {
  border-radius: 50%;
}

.avatar-variant-square {
  border-radius: 6px;
}

/* Image */
.avatar-image {
  aspect-ratio: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* Fallback */
.avatar-fallback {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--muted);
  color: var(--muted-foreground);
  font-weight: 500;
  font-size: 0.875rem;
}

/* Size-specific font sizes for fallback */
.avatar-size-sm .avatar-fallback {
  font-size: 0.75rem;
}

.avatar-size-default .avatar-fallback {
  font-size: 0.875rem;
}

.avatar-size-lg .avatar-fallback {
  font-size: 1rem;
}

.avatar-size-xl .avatar-fallback {
  font-size: 1.25rem;
}

/* Status Indicator */
.avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  height: 12px;
  width: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--background);
}

.avatar-status-dot {
  height: 8px;
  width: 8px;
  border-radius: 50%;
}

/* Status Colors */
.avatar-status-online {
  background-color: hsl(140, 84%, 39%);
}

.avatar-status-offline {
  background-color: hsl(215.4, 16.3%, 56.9%);
}

.avatar-status-away {
  background-color: hsl(38, 92%, 50%);
}

.avatar-status-busy {
  background-color: hsl(0, 84.2%, 60.2%);
}

/* Hover Effect */
.avatar-container:hover {
  opacity: 0.8;
  transition: opacity 0.2s;
}
</style>