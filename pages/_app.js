require("../mocks");
import "./globals.css"
import { AnimatePresence, motion} from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  const variants = {
    initial: {
      opacity: 0,
      x: -6
    },
    animate: {
      opacity: 1,
      x: 1
    },
    exit: { opacity: 0, x: 0, x: -3 },
  }
  return <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
    <motion.div initial="initial" animate="animate" exit="exit" key={router.route} variants={variants}>
      <Component {...pageProps} />
    </motion.div>
  </AnimatePresence>
}
