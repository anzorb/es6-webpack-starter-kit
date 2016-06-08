var testsContext = require.context("../src", true, /.*js$/);
testsContext.keys().forEach(testsContext);
