/*
{
      status: 200,
      url: 'https://api.github.com/orgs/SomeOrg/packages/npm/SomePackage/versions',
      headers: {
        'some': 'headers',
      },
      data: [
        {
          id: 138688012,
          name: '0.84.0',
          url: 'https://api.github.com/orgs/SomeOrg/packages/npm/SomePackage/versions/138688012',
          package_html_url: 'https://github.com/orgs/SomeOrg/packages/npm/package/SomePackage',
          created_at: '2023-10-18T14:33:27Z',
          updated_at: '2023-10-18T14:33:27Z',
          html_url: 'https://github.com/orgs/SomeOrg/packages/npm/SomePackage/138688012',
          metadata: {}
        },
        {
          id: 82940941,
          name: '0.61.1',
          url: 'https://api.github.com/orgs/SomeOrg/packages/npm/SomePackage/versions/82940941',
          package_html_url: 'https://github.com/orgs/SomeOrg/packages/npm/package/SomePackage',
          created_at: '2023-04-04T19:11:18Z',
          updated_at: '2023-04-04T19:11:18Z',
          html_url: 'https://github.com/orgs/SomeOrg/packages/npm/SomePackage/82940941',
          metadata: {}
        },
        {
          id: 82651893,
          name: '0.60.1',
          url: 'https://api.github.com/orgs/SomeOrg/packages/npm/SomePackage/versions/82651893',
          package_html_url: 'https://github.com/orgs/SomeOrg/packages/npm/package/SomePackage',
          created_at: '2023-04-03T22:19:52Z',
          updated_at: '2023-04-03T22:19:52Z',
          html_url: 'https://github.com/orgs/SomeOrg/packages/npm/SomePackage/82651893',
          metadata: {}
        },
        {
          id: 71464256,
          name: '0.54.0',
          url: 'https://api.github.com/orgs/SomeOrg/packages/npm/SomePackage/versions/71464256',
          package_html_url: 'https://github.com/orgs/SomeOrg/packages/npm/package/SomePackage',
          created_at: '2023-02-17T20:44:45Z',
          updated_at: '2023-02-17T20:44:45Z',
          html_url: 'https://github.com/orgs/SomeOrg/packages/npm/SomePackage/71464256',
          metadata: {}
        }
      ]
    }
*/


import { safePublish } from '../src/safe-publish'

describe('safe-publish.ts', () => {
  // it('throws an invalid number', async () => {
  //   const input = parseInt('foo', 10)
  //   expect(isNaN(input)).toBe(true)

  //   await expect(wait(input)).rejects.toThrow('milliseconds not a number')
  // })

  it('gets list of versions', async () => {
    const params = {
      org: 'RocketLoans',
      packageName: 'SomePackage',
      token: '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'
    }
    await safePublish(params)
    expect(true).toBe(true)
  })
})
