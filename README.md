# update-composer-version

This plugin updates composer version to match `nextRelease.version` pf `prepare` step.

## Usage

Add this to your plugins semantic-version array

```json
[ "update-composer-version", { "path": "composer.json" } ],
```

Use `path` config option to customize where `composer.json` is located.
