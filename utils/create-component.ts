import 'colors'
import fs from 'fs'
import templates from './templates'

const componentName = process.argv[2]

if (!componentName) {
  console.error('Please supply a valid component name'.red)
  process.exit(1)
}

console.log(`Creating Component Templates with name: ${componentName}`)

const componentDirectory = `./src/${componentName}`

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red)
  process.exit(1)
}

fs.mkdirSync(componentDirectory)

const generatedTemplates = templates.map((template) => template(componentName))

generatedTemplates.forEach((template, i) => {
  if ([0,1,2,3,4].includes(i)) {
    fs.writeFileSync(`${componentDirectory}/${componentName}${template.extension}`, template.content)
  } else if ([5].includes(i)) {
    fs.writeFileSync(`${componentDirectory}/index${template.extension}`, template.content)
  } else {
    console.error(`file ${i} is not mapped for generator`.red)
  }
})

console.log(`Successfully created component under: ${componentDirectory.green}`)
