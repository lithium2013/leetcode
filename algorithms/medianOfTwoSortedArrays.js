/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (!nums1.length) return getMedian(nums2);
    if (!nums2.length) return getMedian(nums1);

    var flag = nums1.length > nums2.length,
        s = flag ? nums2 : nums1,
        l = flag ? nums1 : nums2,
        sl = s.length,
        ll = l.length,
        sMin = getMinMedian(s),
        sMinIdx = getMinMedianIdx(s.length), 
        sMax= getMaxMedian(s),
        sMaxIdx = getMaxMedianIdx(s.length), 
        lMin = getMinMedian(l),
        lMinIdx = getMinMedianIdx(l.length), 
        lMax = getMaxMedian(l),
        lMaxIdx = getMaxMedianIdx(l.length); 

    if (sl === 1) {
        if (ll === 1) return (sMin + lMin) / 2;
        if (ll === 2) return sMin < lMin ? lMin : (sMin < lMax ? sMin : lMax);
        if (sMin < lMin) return ll % 2 ? (Math.max(sMin, l[lMinIdx - 1]) + lMin) / 2 : lMin;
        if (sMin < lMax) return getMedian(s);
        return ll % 2? (lMax + Math.min(sMin, l[lMaxIdx + 1])) / 2 : lMax;
    }

    var sN = s, lN = l;
    if (sMin < lMin) {
        if (sMax > lMax) return getMedian(l);
        sN = getRight(sN);
        lN = lN.slice(0, ll - Math.floor(sl / 2)); 
    } else {
        if (sMax < lMax) return getMedian(s);
        sN = getLeft(sN);
        lN = lN.slice(Math.floor(sl / 2), ll);
    }
    return findMedianSortedArrays(sN, lN);
};

function getMedian (nums) {
    var length = nums.length;

    return length % 2 ? nums[Math.floor(length / 2)] : (nums[length / 2 - 1] + nums[length / 2]) / 2;
}

function getMinMedian (nums) {
    var length = nums.length;

    return length % 2 ? getMedian(nums) : nums[length / 2 - 1];
}
function getMinMedianIdx (length) {
    return length % 2 ? Math.floor(length / 2) : length / 2 - 1;
}
function getMaxMedian (nums) {
    var length = nums.length;

    return length % 2 ? getMedian(nums) : nums[length / 2];
}
function getMaxMedianIdx (length) {
    return length % 2 ? Math.floor(length / 2) : length / 2;
}

function getLeft (nums) {
    var length = nums.length;

    return length % 2 ? nums.slice(0, Math.ceil(length / 2)) : nums.slice(0, length / 2);
}

function getRight (nums) {
    var length = nums.length;

    return length % 2 ? nums.slice(Math.floor(length / 2), length) : nums.slice(length / 2, length);
}
