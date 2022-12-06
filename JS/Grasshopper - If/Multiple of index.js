// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

multipleOfIndex = (array) => array.filter((el, index) => el % index == 0);
