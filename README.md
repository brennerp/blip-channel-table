# BLiP's Channel Support Table

This is a project made for building the page for [BLiP](https://blip.ai/)'s Channel Support.

It is built with Svelte + Rollup and constructs a responsive table based on a JSON file (BlipChannelTable.json).

## Running the project

To install the dependencies, run:

```bash
cd blip-channe-table
npm install
```

To run the developer server, run:

```bash
npm run dev
```

If error occur, try running with adming permissions or in PowerShell.

## Understanding the table

The table is built based on BlipChannelTable.json.

It has two main objects: contentTypes and contentCapabilityPerChannel (translated to 'channels' in code).

The *contentTypes* object is responsible for telling all possible contentTypes, their names and any additional info. It is used to build the side table and to get information for the main table.

The *contentCapabilityPerChannel* (or *channels*) object is responsible for informing about each channel's info and their support to each of the content types. It is used to build the main table and get information for the channel-content example modal.
