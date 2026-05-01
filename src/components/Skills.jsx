"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Tailwind', level: 'Advanced' },
    { name: 'Bootstrap', level: 'Basic' },
    { name: 'Next.js', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Better Auth', level: 'Basic' },
  ];

  const techIcons = [
    { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/1280px-Official_CSS_Logo.svg.png' },
    { name: 'JS', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'ES6', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'DOM', logo: 'https://cdn.simpleicons.org/codeigniter/EF4444' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next', logo: 'https://cdn.simpleicons.org/nextdotjs/000/fff' },
    { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Daisy', logo: 'https://cdn.simpleicons.org/daisyui/5AD7E4' },
    { name: 'HeroUI', logo: 'https://cdn.simpleicons.org/nextui/000/fff' },
    { name: 'Node', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', logo: 'https://cdn.simpleicons.org/express/000/fff' },
    { name: 'Bootstrap', logo: 'data:image/jpeg;base64,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' },
    { name: 'Mongo', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'Auth', logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMWFhUVGBkWFxgXGBgXFxcVFRcYFxYVFxgYHSggGBolHRUYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHiUtLS0tLS0uLS4tLS0tLS0tLS0tLS0tLS01LS0tLS0tLS0tLS0tLS0tLS0tLS03LS03Lf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAADAQADAQAAAAAAAAAAAAAAAQIHAwQGBf/EAEEQAAIAAgUJBQcCBQMFAQAAAAABAhEDEkFRwQQhMWFxgbHR8AU0kaHhBgcTc4OSshYiJDNj0uIyU/EVF3KCsxT/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQMEBQIG/8QAMhEAAgECAQcLBQEBAAAAAAAAABEBAgMEBRITMTJRgRQVITNBUmFxkaHhImLB0fAjsf/aAAwDAQACEQMRAD8A6ctV5MVpTT4+omth7coMEs+i0TXDEbTzdZxS2ANilhwHEsQejrcDWwBsnliVLRuFLN1eNLZ1vAbIXMqWbq8SWbreVCs1gAxS07eYVcxST8/MlLYAMl4cipanp8BNCkM6YcniNLU7BD8ABiVm3kCVsnoxHLQKWwAYmuIlDqvKYNANkRLDgOWfRaOJZrBNPz8xnTJeGIPlwHLYKJZutwDY4tPiLliNrZ1pFLN1eADlo3ErR4jS2WCWjx9QAprMK/bzF4DU8+3zAByzCv2LAS3AMCparxLB4i8AEBUK1XCVm8XgAAUlbKzkXBbtOLwLgnYl4+oSB2pZ/EmJFVcRNHBTYJZ94mtujEdUTXW8BsTWHAcS22g4QcK4+QAyZcMR3abAq9bx1Fw8wGyIVjwKst8NYlCUoc3qEjYpZ3t5jst8DmyTJXSUkNHD/qjiUKm5KbclM9B+gsruo/v9CK5ft25VdUQOImdR5aJcFgPndpPTv2Byu6j+/wBA/QOWXUf3+hxyyx349TuKatx5WXB4lLfZYfa7X9lafJqP4lKoas6uaKbm5ys1HxapNRcpuQ6ZcCno1iVm3kNYXaxVdG0FD1M7Bg1xGljYXk9A444YIf8AVFEoFN5pxOS82el/QOV3Uf3/AOJFcvW7e3VEDiJnUeViWHAaWffceofsDll1H9/+IfoDK7qP7/Q45ZY78ep1m1bjysUO3RiJrDger/QGWXUf3/4ifu/yy6j+/wBA5ZY78eo1VuPLRLbaTLhierfu/wAsuo/v/wARf9vssuo/v9A5ZY78eo1O48tLRpsJSzePA+72v7J5Rk1H8WlUNWah/bFNzi1SPhqEnt3Ka4dEuA1A1mt8NYpadvMbh6mFVecjsGKy3wFLTsWA6vUwq8OQDYetgktGx4jqdTFV4cwAa5WCS0bwUGFopABSwu2FwW7TiUPUy4IFr8fQJA7cxM5LfG0l2kZnsmYmclu+8TwvnaA2Q2NvGy8b5W6hxc7QGzjmOeFisK5Yju3WjBnGhp5vRDXPgVZ66wGzv+zne6D5sH5G0mMezve6D50H5GzmBlfrKfIt4fVIAAGQWDynvK7n9SHhEZZPqSNU95HdPqQ8IjLlytPSZK6jjJUvT9Rxz0BPqSLVm3kCwv1mmRs7HY7/AIig+dR/nCboYb2R3ih+dR/mjcjByxtUeUlizqkAADGJwAAAAAAADyvvK7n9SDizJka17x+5/Ug4sylLHgelyT1HGSvcn6jjb6kgnxmckWZeor9vM0zlkT6khHJZ6k37FgA2TW6khT68TlljaTyeIAya3UlYI5EsLSVZvAbJn1JFQxpXjWF+wujenPaEjZ2muuJLOSeNpL6zkZmMTTF4FrTvvE8L52gNkNDa2dbinyCLnaA2ccs3V41tXW4rrzH6WjGzjSGtwJYlWeusAZ9D2c73QfNg/I2Yxr2d73QfNg/I2UwMr7dPkXcLqkAADJLR5b3kd0+pDwiMtNt7X7Lo8po/h0s6s1FmcnNTt3nxl7CZJ/U+9mxgcdas2s2ptle7aqqqcGVy0CNV/QmSXUn3+gfoTJP6n3suc62PH0I9BWZr2P3ig+dR/nCbieTyj2OyahhipoFHXo06SGcU1Wg/dDNWqaPMr29yv+l9r/uKuIpnHTFVrs1voO6Z0XRUakBlj9vcr/pfa/7h/r3K/wCl9r0fcV+ar/h6nenpNSA8V7Ge09PlNPFR0tSqqNx/tUnWUUCv0SiZ7Up37FVmrMq1klNUVQ4AAAhOjy3vH7n9SDEypLN48DVveN3P6kHFmWJYnpMldRxkq3p+ojwFV4+ZyPrOKXHmaREziW4JdeByvR6kOHgsBs6ziQLnjaTLg8QGyQkWnhaSloAbFIqFOxrrcCuxKgenbeEjZ26q43iaLm9YnvIzMYpKYmus95Uwe8AZDQ2sb7Bsb2MY2RLreOrssvtCzq8ee5gNkJDlms87wRS0WgNnf9nl/FUHzYPyNkMc9nu9UHzYPyNjMHK23T5F/CbMgAAZJbAAAAAAAAOp2t/Ipflx/izEVCupm3drfyKX5cf4sxRN6zdyRs1cCnitcHHEgkp7y4lqYOes2GVmep92fe4/kxX/AO5RmnGZ+7Rfxcen+TFp/wDOjNMPN5U6/hBew+wAABnE55f3jdz+pBxZliNT943c/qQYmWI9JkrqOMlO/tDa2eYS4hN6xp6jRIWTLZ5hLhyKT2ilqGNkuFarbyZcOZyzeslrUA2QktVl4pFzesmWoY2KS6mVBAruIZ9Y4XqfW4Q2d31vJdpdV6xPeRmYxJZ95MuGJdUTW0Y2S+XAb0+I2ga1sBsnliPNNbrwkOT1gNkJY8CmlKzzvEkUk5WgDO/7Pr+KofmwfkbCY/7Pd6ofmwfkbAYWVtunyNLBbMgAAZJcAD4vtZ2nHk9B8Sjq1qyX7k2pNOeZNXHjl7c5XdRfZF/eW7OCuXqc6lIhuX6aJUmlgZp+ucquovsi/vD9c5XdRfZF/eTc2X/D1OOV2zQe1v5FL8uP8WYpDzvPW0HtflFLFDQxqjq0kUNHFKFp1Y2oXJ1szk2eg/QuS30v3+haw9UYKJpu9u4jr/36aOwzF8uBSWfeaY/YTJb6X7/QP0Jkt9L9/oWOdLHj6HHJrh5z3bd7i+TF/wDSjNLPjdjezVDk1I6SjcdZwuH90U1JtO7T+1H2THxt6m9dzqdSLdmiaKVIAAFQlPMe8Xun1IOLMsSx4Gp+8Tun1IMTLkj0eSuo4yUcTP1kxJdTHLPv5lVXrGlrtkaRAyWlKzzE1wWBShesN4AxNbLbyeTxOSq9ZL2gNkrXKy8lWbyqr1i3jGxJbNGvUXRrTtFJ6xwwu99bxSNnczcbxMuWNgmiMzGTmE+tN5yVc++4lrhdK0Y2SwfO+0qWA4ljYA2cfXmPwsvHLreOrhYA2caKWj/kEipZvTWEjZ3vZ/vVD82D8jXzIuwF/FUPzYPyNdMLK23T5GngdmfMAADKLx5j3h90+pDwiM0W6y80z3hd1/8AeHhEZqocLD0WTOo4yZeMn/TgK7aCl1MqWjaEupGgVWdjsr+fQ/No/wA0bOYx2V3ih+dR/mjZzEyttU8TRwWqQAAMgugAAAAAAAHmfeH3T6kGJmCWJqHvB7p9SDEzFcz0WS+o4yZ2Kn6+BL3eYZvMtw9SFLiaRXZPh5i64F1epEvDkA2JtavMnlzLq42Ey4cwGxJ7PMRahwsJkMbJzdTLhav4gl1IqCHjcEjiTtvrETRySz+NhLRGZjJcxS2HJLPvuE1wxBgyGDWpdbymsOA4ln8bAY2ccs3V45bOt45cMSpaN1gMbOJFQrYCWPAqWb01hI2d3sDvND82D8jXKyvMXlp28yailo8kUcVg9PVE5yXh8lvD4rRRMJm1VleFZXmJxUeqzkFRXW58yKvNMd/2+Sxzh9vv8Gj+8B/wub/ch4RGalKDVY8RpYWGjhrGgozGypevaWrOSIuEWlo28gS4XaywRM5+yv59D82j/NGzVleYi1xEoFdfYUsXg+UTE5yXh8lqxidFEwmbfWV4VleYfFArrrNRSo8+i24qc0R3/b5J+X/b7/Bt1ZXhWV5iDo1d5awcCuus1BzTHf8Ab5Hy/wC33+Db6yvQVlejEYqNXX2CqavLWLmmO/7fIcu+33+DSvb9/wAJml/rgxMzSLq6M11hK5mjhbGgozGyvdu6SpoUtnW8U35lRdZhS07eZZI2QgLl1ITWnYsBgyQLljYTLg8QGyZAWuVgktADZJUM7Eut4JcLthcEOq0JkcSdqoJoqsJsjMxiqicJcxMBshwjcOPkNjbx8wGyJBV6neMc8PIYMhIpQ5vUSKTzAOJJaObIsm+JSQUacnHEoZ3VnKZxs7HZlOqOmo6SKcoI4YnLTJNNyOapnNlazqmYzoeo5+0ux/hwOkhpYaSGGkdFHJRQuGkWdqUSzrNpQRdkwQ0dHSUmUQwOlhcUMNSOJuTlKcKaO92921R0tG4E6SNuk+InSKFfDhz/ALIKrbem0f8A1mjeT0dD8Sngq0cUEUMEMDhjrT0zinKzeVYrvZsN6+nyXlv8CzMWs6Vu9/X8nzuxuyYconD8ZQRqbquCJzhhSbims1+bTmOt/wDmoviVfjr4cp/EqRy0TlUlW05jsdgZdDQ0teNNqpHDmzucSktLR82WYsRFWfLmV0LV+iKaqc2FHTx/Z9LtrsqHJ3U+NDHGpThUESknDWUU3mdmbWVl/ZEFFCq+UQ13AqRQVI5tRKaVZKqiPaDLoaenipIE1C1Cv3ST/bCk9Ddx9LtXtmjpaJQKkplKjgh+HVg+G4oM6bdaelLwIom7EUN+Or9f28l/zdSXh/P+3HSyHsNUlHRxxU0MDpY3RwQxQxOcackpw6J6z5eUUDgjigi0wROF3ThbT80ei7H9oVQ0dDBJurSRRUilDngi0VW86iU52aD48GVujpIo6Nzm4pOkhhibTc5xKKara9p1bqu51T1dnrPh+xV6PNhcfT+3HXyXJ3HHDBD/AKo4lCtsTl4HY7Z7OiyekdHE1FmUSiWiKGJZmvNbjs9i9ow0VM6ekhrRJRxQJJJfFi0T0VYc70aM0kV2x2hR01FRKGBwR0c4JJuKF0bzw/uidaac8zvY5ruaSIX0/n+/6ERRmTL6QpOwIlS0lFXU6OhdM3JyaSTq7f3HH2N2TDTzXxoYI1N1XBE/2QpNxTWa3RpzH0qbtyhfxKZKk+LSUHwHDKGom0k4605tZtEj5nYOXQ0NI4402nRxwZpNziUlpazEcVXptzvUbtfaSTo4rjd+CMi7MVLlENBR0qiUU5R1Yks0Djf7XJ2NHBBkTeTvKKykqRUdW2bgrzmdj2ey6GgyijpY03DBWnVk3ngihUptWtHNlXbcVLkvwqWOKOk+Ko03KVRQSlO+bdhJVN2K1Gro/L7PLcc05k0udfT+EfFY0gGWCJicPUxVeJTYT4gdMmr1NCkXMQDYqvWYUipiAGKr1NCqlpiAbJq9TKho0EyoY1r63gNnb9RMH1iDOCgNYifXiESakDTlozCAPQb5kzHn0yGAdeY5YEq4KwAwXMqzq8lFIAiQ5hLqY0JCGyIsOQS43lNEyGNi5PEaWFoSHIAZKWjbyKS63hIAGxPEEsRsGA2TEsByz7wiFFPz8wGxRPhiS+XAfgDGDCJYk9eZT3Cs6vA6YXbiVzL8CUhgwaFft5j8ASfV4DYpdTFy5DQANhLG0nlzKCQDYksLRKwcgAbEkXBbtIKhnZIJHEnZ33iYAclMt0isz5sFpvCCk4S3L/gABQGdIfH1eeqU9ofG1dSXLzEAZsBnSX8fjfs8dBKpdWhZrc9mIALNgM6SFzKsAAkIDmOYgAYmuHIe8AABS4cxra7AAAFLRtBbQAAB4imADBkxLALd4AA2J4Yg+XAAGDHFzJ68wABsd24lLEAAbGxS07eYAA2AmuHIAAY995MuDxABjY1tdhMhgAMEVAuIAI6iT//Z' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text-primary">Technologies</h2>
          <p className="text-text-secondary mt-2">My Tech Stack</p>
        </motion.div>

        {/* Scrolling/Grid Tech Icons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {techIcons.map((icon) => (
            <motion.div 
              key={icon.name} 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center p-3 shadow-md border border-gray-100 dark:border-gray-700 cursor-default group" title={icon.name}
            >
              <img 
                src={icon.logo} 
                alt={icon.name} 
                className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-brand-card p-10 rounded-[2.5rem] border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-2xl font-bold mb-10 text-center text-text-primary flex items-center justify-center gap-3">
              <span className="w-8 h-1 bg-brand-orange rounded-full"></span>
              <span className='light:text-black dark:text-white'>Frontend Developer</span>
              <span className="w-8 h-1 bg-brand-orange rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 group/item">
                  <div className="text-brand-orange bg-brand-orange/10 p-2 rounded-lg group-hover/item:bg-brand-orange group-hover/item:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">{skill.name}</p>
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-brand-card p-10 rounded-[2.5rem] border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-2xl font-bold mb-10 text-center text-gray-900 dark:text-white flex items-center justify-center gap-3">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Backend Developer
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-4 group/item">
                  <div className="text-green-500 bg-green-500/10 p-2 rounded-lg group-hover/item:bg-green-500 group-hover/item:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{skill.name}</p>
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
