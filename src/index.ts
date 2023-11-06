/**
 * Imports ESM modules without errors on CommomJS projects
 *
 * @param {string} name Name of ESM module that will be loaded
 * @return {Promise<T>} Loaded module promise
 */
export async function importEsmModule<T>(
  name: string
): Promise<T> {
  const module = eval(
    `(async () => {return await import("${ name }")})()`
  )
  return module as T
}
