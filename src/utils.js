export function template(className, content) {
  return `
    <div class="${className}">
      ${content}
    </div>
  `
}
