// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract Journal {
  address owner;

  struct Entry {
    string timestamp;
    string title;
    string content;
  }

  // basically an array of entries
  mapping(address => Entry[]) entries;

  function addEntry(string memory _timestamp, string memory _title, string memory _content) public {
    Entry memory newEntry = Entry(_timestamp, _title, _content);
    entries[msg.sender].push(newEntry);
  }

  function getEntry() public view returns (string memory) {
    uint256 len = getEntryLength();
    string memory res = "{";

    for (uint i = 0; i < len; i++) {
        res = string(abi.encodePacked(res, entryToJson(entries[msg.sender][i])));

        if (i < len - 1) {
            res = string(abi.encodePacked(res, ","));
        }
    }

    res = string(abi.encodePacked(res, "}"));
    return res;


  }

  function getEntryLength() public view returns (uint256){
      return entries[msg.sender].length;
  }

  function entryToJson(Entry memory entry) private pure returns (string memory) {
        return string(
            abi.encodePacked(
                '{ "timestamp": "', entry.timestamp, '", "title": "', entry.title, '", "content": "', entry.content, '" }'
            )
        );
    }

}