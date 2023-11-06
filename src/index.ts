/**
 * Imports ESM modules without errors on CommomJS projects
 *
 * @param {string} name Name of ESM module that will be loaded
 * @return {Promise<T>} Loaded module promise
 */
export async function importEsmModule<T>(
  name: string
): Promise<T> {
  try {
    const module = eval(
      `(async () => {return await import("${ name }")})()`
    )
    return module as T
  } catch ( error ) {
    const msg = `Could not load/find "${ name }" ESM Module, make${ ' '
    }sure the module is installed and it's name is spelled correctly`
    console.error( msg, error )
    throw Error( msg )
  }
}
