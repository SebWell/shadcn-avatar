<template>
  <div :class="avatarClasses">
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
      <component v-else-if="content.fallbackIcon" :is="content.fallbackIcon" class="w-1/2 h-1/2" />
      <span v-else>{{ getInitials() }}</span>
    </div>
    
    <div v-if="content.showStatus" :class="statusClasses">
      <div :class="statusDotClasses" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { cn } from './cn.js'

export default {
  name: 'WewebAvatar',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        src: '',
        alt: '',
        fallbackText: '',
        fallbackIcon: null,
        name: '',
        size: 'default',
        showStatus: false,
        status: 'offline',
        customClasses: ''
      })
    }
  },
  setup(props) {
    const imageError = ref(false)

    const sizeClasses = {
      'sm': 'h-8 w-8',
      'default': 'h-10 w-10',
      'lg': 'h-12 w-12',
      'xl': 'h-16 w-16'
    }

    const avatarClasses = computed(() => cn(
      "relative flex shrink-0 overflow-hidden rounded-full",
      sizeClasses[props.content.size] || sizeClasses.default,
      props.content.customClasses
    ))

    const imageClasses = computed(() => cn(
      "aspect-square h-full w-full object-cover"
    ))

    const fallbackClasses = computed(() => cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground font-medium"
    ))

    const statusClasses = computed(() => cn(
      "absolute bottom-0 right-0 flex h-3 w-3 items-center justify-center rounded-full border-2 border-background"
    ))

    const statusDotClasses = computed(() => {
      const statusColors = {
        'online': 'bg-green-500',
        'offline': 'bg-gray-400',
        'away': 'bg-yellow-500',
        'busy': 'bg-red-500'
      }
      
      return cn(
        "h-2 w-2 rounded-full",
        statusColors[props.content.status] || statusColors.offline
      )
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
      return '??'
    }

    const handleImageError = () => {
      imageError.value = true
    }

    const handleImageLoad = () => {
      imageError.value = false
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
      handleImageLoad
    }
  }
}
</script>

<style>
/* Import global shadcn/ui styles */
@import './globals.css';
</style> 