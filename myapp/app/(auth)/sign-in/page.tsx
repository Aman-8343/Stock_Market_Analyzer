import React from 'react'

const SignIn = () => {
    return (
       class Solution {
public:

    struct Info {
        bool isBST;
        int size;
        int minVal;
        int maxVal;
    };

    Info solve(Node* root) {

        // Base case: empty tree is BST
        if (!root)
            return {true, 0, INT_MAX, INT_MIN};

        Info left = solve(root->left);
        Info right = solve(root->right);

        // Check BST condition
        if (left.isBST && right.isBST &&
            root->data > left.maxVal &&
            root->data < right.minVal) {

            return {
                true,
                left.size + right.size + 1,
                min(root->data, left.minVal),
                max(root->data, right.maxVal)
            };
        }

        // Not BST → take largest BST size from children
        return {
            false,
            max(left.size, right.size),
            INT_MIN,
            INT_MAX
        };
    }

    int largestBst(Node *root) {
        return solve(root).size;
    }
};
    )
}
export default SignIn
