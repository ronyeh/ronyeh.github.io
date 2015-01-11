#!/usr/bin/env bash

echo "Open the local site."
open http://localhost:8000/

echo "Start the local web server."
echo "Ctrl+Z to suspend the process."
echo "'bg' to background the most recent process."
echo "'fg' to bring the webserver into the foreground."
echo "Ctrl+C to kill it."
python -m SimpleHTTPServer 


