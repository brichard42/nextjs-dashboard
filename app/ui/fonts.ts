import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'

export const circe = localFont({
    src: './fonts/circe-slab-a-extra-light.otf'
})
export const playfairDisplay = Playfair_Display({
    subsets: ['latin']
});
