import {getOctokit} from '@actions/github'
import {setFailed, info as logInfo, } from '@actions/core'

/**
 * Wait for a number of milliseconds.
 * @param milliseconds The number of milliseconds to wait.
 * @returns {Promise<string>} Resolves with 'done!' after the wait is over.
 */
export async function safePublish(params: {
  org: string, 
  packageName: string, 
  token: string, 
  packageVersion: string
  dryRun: boolean
}): Promise<void> {

  const {org, packageName, token, packageVersion, dryRun} = params;

  try { 
    const logKey = JSON.stringify({packageName, packageVersion});

    logInfo(`Trying to safe publish: ${logKey}`)

    const github = getOctokit(token).rest

    logInfo(`Getting list of published versions`)
    const results = await github.packages.getAllPackageVersionsForPackageOwnedByOrg({
      package_type: 'npm',
      package_name: packageName,
      org: org,
    });

    logInfo(`Checking if new version exist in published versions`)
    const found = results.data.find(item => item.name === packageVersion)

    if (found) {
      throw new Error(`Package version exist and would cause on error during publishing: ${logKey}`)
    } 

    logInfo(`New version does not exist in published versions`)

    if (dryRun) {
      logInfo(`Dry run: would have published: ${JSON.stringify({packageName, packageVersion})}`)
    } else {
      logInfo(`Publishing new version`)
      github.packages.
    }


  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) {
      setFailed(error.message)
    } else {
      throw error;
    }
  }
}
  
