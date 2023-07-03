import Swup from 'swup'
import SwupOverlayTheme from '@swup/overlay-theme'
import SwupJsPlugin from '@swup/js-plugin'

const swup = new Swup({
  /* options */
  plugins: [
	  new SwupOverlayTheme(),
	  new SwupJsPlugin()
  ]
})