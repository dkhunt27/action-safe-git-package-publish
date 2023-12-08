import {getOctokit} from '@actions/github'
import * as core from '@actions/core'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // get inputs
    const org: string = core.getInput('org')
    const packageName: string = core.getInput('packageName')
    const token: string = core.getInput('token')

    const github = getOctokit(token).rest

    const data = await github.packages.getPackageForOrganization({
      package_type: 'npm',
      package_name: packageName,
      org: org
    });

    console.log('data', data)

  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
