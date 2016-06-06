#!binbash

echo  Start transpiling ES2015
echo 
rm -rf .lib
.node_modules.binbabel --ignore __tests__,manager --plugins transform-runtime .src --out-dir .lib
if [[ -z $DEV_BUILD ]]; then
  .node_modules.binwebpack --config scriptswebpack.manager.conf.js
fi
echo 