// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

/**
 * @title Journal - A decentralized journaling application on Base and Optimism.
 * @dev This contract allows users to create journal entries with unique timestamps.
 */
contract Journal {
    address owner;

    /**
     * @dev Struct representing a journal entry.
     * @param timestamp The timestamp of the entry.
     * @param title The title of the entry.
     * @param content The content of the entry.
     */
    struct Entry {
        string timestamp;
        string title;
        string content;
    }

    // Mapping to store the array of entries for each user's address.
    mapping(address => Entry[]) entries;

    /**
     * @dev Modifier to ensure that a provided timestamp is unique among the sender's entries.
     * @param _timestamp The timestamp to check for uniqueness.
     */
    modifier uniqueTimestamp(string memory _timestamp) {
        uint256 len = getEntryLength();
        for (uint256 i = 0; i < len; i++) {
            require(
                keccak256(bytes(entries[msg.sender][i].timestamp)) != keccak256(bytes(_timestamp)),
                "Timestamp must be unique"
            );
        }
        _;
    }

    /**
     * @dev Adds a new journal entry.
     * @param _timestamp The timestamp of the entry.
     * @param _title The title of the entry.
     * @param _content The content of the entry.
     */
    function addEntry(
        string memory _timestamp,
        string memory _title,
        string memory _content
    ) public uniqueTimestamp(_timestamp){
        Entry memory newEntry = Entry(_timestamp, _title, _content);
        entries[msg.sender].push(newEntry);
    }

    /**
     * @dev Returns all journal entries of the sender in JSON format.
     * @return res A JSON-formatted string containing all journal entries.
     */
    function getEntry() public view returns (string memory) {
        uint256 len = getEntryLength();
        string memory res = "{";

        for (uint256 i = 0; i < len; i++) {
            res = string(abi.encodePacked(res, entryToJson(entries[msg.sender][i])));

            if (i < len - 1) {
                res = string(abi.encodePacked(res, ","));
            }
        }

        res = string(abi.encodePacked(res, "}"));
        return res;
    }

    /**
     * @dev Returns the number of journal entries for the sender.
     * @return The number of journal entries.
     */
    function getEntryLength() public view returns (uint256) {
        return entries[msg.sender].length;
    }

    /**
     * @dev Deletes a journal entry based on its timestamp.
     * @param _timestamp The timestamp of the entry to be deleted.
     */
    function deleteEntryByTimestamp(string memory _timestamp) public {
        uint256 len = getEntryLength();

        for (uint256 i = 0; i < len; i++) {
            if (keccak256(bytes(entries[msg.sender][i].timestamp)) == keccak256(bytes(_timestamp))) {
                // Found the entry with the matching timestamp. Delete it.
                deleteEntry(i);
                return;
            }
        }

        revert("Entry with the given timestamp not found");
    }

    /**
     * @dev Deletes a journal entry at a specific index.
     * @param index The index of the entry to be deleted.
     */
    function deleteEntry(uint256 index) private {
        uint256 len = getEntryLength();
        require(index < len, "Invalid entry index");

        for (uint256 i = index; i < len - 1; i++) {
            entries[msg.sender][i] = entries[msg.sender][i + 1];
        }

        entries[msg.sender].pop();
    }

    /**
     * @dev Converts a journal entry to JSON format.
     * @param entry The journal entry to convert.
     * @return A JSON-formatted string representing the journal entry.
     */
    function entryToJson(Entry memory entry) private pure returns (string memory) {
        return string(
            abi.encodePacked(
                '{ "timestamp": "', entry.timestamp, '", "title": "', entry.title, '", "content": "', entry.content, '" }'
            )
        );
    }
}
