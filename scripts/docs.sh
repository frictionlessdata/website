set -e
set -x

# Python
rm -rf site/tooling/python
git clone --quiet --depth=1 https://github.com/frictionlessdata/frictionless-py.git
cp -R frictionless-py/docs/target site/tooling/python
# TODO: should be fixed on the CSS level
sed -i 's#https://frictionlessdata.io##g' site/tooling/python/README.md
rm -rf frictionless-py
echo '[ Python docs are updated! ]'

# JavaScript
git clone --quiet --depth=1 https://github.com/frictionlessdata/frictionless-js.git
cp frictionless-js/README.md site/tooling/javascript
# TODO: should be fixed on the repo level
sed -i '1s;^;# Frictionless Framework\n\n;' site/tooling/javascript/README.md
rm -rf frictionless-js
echo '[ JavaScript docs are updated! ]'
