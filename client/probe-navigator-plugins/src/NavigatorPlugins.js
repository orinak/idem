const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const isIE = () => {
  const p11 = Object.getOwnPropertyDescriptor
  const p12 = Object.getOwnPropertyDescriptor(window, 'ActiveXObject')

  const p2 = 'ActiveXObject' in window

  return (p11 && p12) || p2
}

const getPluginsIE = () => {
  // IE
  var names = [
    'AcroPDF.PDF', // Adobe PDF reader 7+
    'Adodb.Stream',
    'AgControl.AgControl', // Silverlight
    'DevalVRXCtrl.DevalVRXCtrl.1',
    'MacromediaFlashPaper.MacromediaFlashPaper',
    'Msxml2.DOMDocument',
    'Msxml2.XMLHTTP',
    'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
    'QuickTime.QuickTime', // QuickTime
    'QuickTimeCheckObject.QuickTimeCheck.1',
    'RealPlayer',
    'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
    'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
    'Scripting.Dictionary',
    'SWCtl.SWCtl', // ShockWave player
    'Shell.UIHelper',
    'ShockwaveFlash.ShockwaveFlash', // flash plugin
    'Skype.Detection',
    'TDCCtl.TDCCtl',
    'WMPlayer.OCX', // Windows media player
    'rmocx.RealPlayer G2 Control',
    'rmocx.RealPlayer G2 Control.1'
  ]

  const checkName = name => {
    try {
      // eslint-disable-next-line
      new ActiveXObject(name)
      return name
    } catch (err) {
      return null
    }
  }

  // starting to detect plugins in IE
  return names
    .map(checkName)
    .filter(name => name)
}

const getPlugins = () => {
  const { navigator } = window

  if (!navigator.plugins) {
    return null
  }

  const plugins = []

  const l = navigator.plugins.length
  for (let i = 0; i < l; i++) {
    plugins.push(navigator.plugins[i])
  }

  return plugins.map(p => p.name)
}

const getter = () => {
  return isIE()
    ? getPluginsIE()
    : getPlugins()
}

/**
 * Probe to get browser plugins w/ versions
 *
 * @returns {Future<Error|Trait>}
 */

function NavigatorPlugins () {
  return Future
    .attempt(getter)
    .map(Trait.GenericTrait)
}

// expose probe

module.exports = NavigatorPlugins
