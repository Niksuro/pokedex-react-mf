const cli = require('next/dist/cli/next-start')
require('dotenv').config()
cli.nextStart(['-p', process.env.NEXT_PUBLIC_PORT || 3000])