module.exports = {
  safelist: ['rotate-45', 'py-0', 'py-8', 'py-16', 'py-32', 'py-64', 'w-full', 'w-1/2', 'md:w-full', 'md:w-1/2', 'md:w-1/3', 'lg:w-full', 'lg:w-1/2', 'lg:w-1/3', 'lg:w-1/4', 'lg:w-1/5', 'lg:w-1/6', 'xl:w-1/2', 'xl:w-1/3', 'xl:w-1/4', 'xl:w-1/5', 'xl:w-1/6', 'hover:hidden', 'hover:block', 'group-hover:hidden', 'group-hover:block', 'w-1/10', 'w-2/10', 'w-3/10', 'w-4/10', 'w-5/10', 'w-6/10', 'w-7/10', 'w-8/10', 'w-9/10', 'w-10/10', 'md:w-1/10', 'md:w-2/10', 'md:w-3/10', 'md:w-4/10', 'md:w-5/10', 'md:w-6/10', 'md:w-7/10', 'md:w-8/10', 'md:w-9/10', 'md:w-10/10', 'lg:w-1/10', 'lg:w-2/10', 'lg:w-3/10', 'lg:w-4/10', 'lg:w-5/10', 'lg:w-6/10', 'lg:w-7/10', 'lg:w-8/10', 'lg:w-9/10', 'lg:w-10/10', 'col-span-1', 'col-span-2', 'col-span-3', 'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'gap-x-0', 'gap-y-0', 'gap-x-4', 'gap-y-4', 'lg:gap-x-4', 'lg:gap-y-4', 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4'],
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid'
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80"
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw"
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        "3/4": "75%"
      },
      minWidth: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%"
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw"
      },
      maxHeight: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw"
      },
      cursor: {
        'zoom-in': 'zoom-in'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
  plugins: []
}