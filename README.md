![Tests Passing](https://github.com/NicolaWealth/in_batches/actions/workflows/auto_test_main_badge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Fin_batches%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `in_batches` package provides functionality for a given callback function to be applied (synchronously or asynchronously) to batches (of a specified size) of an iterable object.

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `in_batches` package with npm:

`npm install @nicolawealth/in_batches`

# Usage
The 'in_batches' package allows for efficient processing of large data sets in manageable batches to optimize performance and handle asynchronous tasks effectively.

# Interface
The package exports two functions, `inBatches(elements, size, callback)` and `inBatchesAsync(elements, size, callback)` which
behave in the same manner except that `inBatchesAsync` performs it's `callback` function calls asynchronously. Here `elements` is an iterable object (such as an array) and `size` refers to the desired batch size, i.e. the size of the groupings of `elements`.
`callback` refers to the function which will be applied to each batch of `elements` where `callback` is of the form  `(elements, batchNum) => void`. The `callback` function consumes a subset of `elements` and a `batchNum` (0, 1, 2, ...) and does not return anything.
If `size` does not evenly divide `elements`, the final batch will contain the remainder of `elements` after division by `size` and thus will contain less than `size` items.

# Testing
Tests can be found in `in_batches.test.ts` located in `in_batches/src` and should be run with sinon, mocha and nyc.
