RegisterCommand(
  'testworking',
  () => {
    console.log('works!')
  },
  false,
)

RegisterCommand(
  'nuitest',
  () => {
    SendNUIMessage({
      action: 'openPage',
      data: {
        pageName: 'HelloWorld',
      },
    })

    SetNuiFocus(true, true)
  },
  false,
)

RegisterNuiCallbackType('closeMenu')
on('__cfx_nui:closeMenu', (_: any, cb: (responseData: any) => void) => {
  SetNuiFocus(false, false)
  SendNUIMessage({
    action: 'closePage',
    data: {
      pageName: 'HelloWorld',
    },
  })
  cb(true)
})

RegisterNuiCallbackType('getDemoData')
on('__cfx_nui:getDemoData', (data: any, cb: (responseData: any) => void) => {
  console.log(data)

  cb({ demo: true, inBrowser: false })
})
