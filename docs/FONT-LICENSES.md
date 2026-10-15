# Self-hosted fonts

These unmodified fonts were downloaded from the official [Google Fonts repository](https://github.com/google/fonts) on 11 October 2026. Both families are distributed under the **SIL Open Font License 1.1**. The complete copyright notices and licences are included beside the font files and must remain with redistributed copies.

| Local asset                                 | Source                                                                                                                | Use                                                           |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `public/fonts/dm-sans-variable.ttf`         | [DM Sans variable](https://github.com/google/fonts/blob/main/ofl/dmsans/DMSans%5Bopsz%2Cwght%5D.ttf)                  | Normal style; variable weight 100–1000 and optical size 9–40. |
| `public/fonts/instrument-serif-regular.ttf` | [Instrument Serif Regular](https://github.com/google/fonts/blob/main/ofl/instrumentserif/InstrumentSerif-Regular.ttf) | Regular style; weight 400.                                    |
| `public/fonts/instrument-serif-italic.ttf`  | [Instrument Serif Italic](https://github.com/google/fonts/blob/main/ofl/instrumentserif/InstrumentSerif-Italic.ttf)   | Italic style; weight 400.                                     |

DM Sans copyright: 2014 The DM Sans Project Authors. Licence: [`public/fonts/DM-Sans-OFL.txt`](../public/fonts/DM-Sans-OFL.txt), copied from [the source family folder](https://github.com/google/fonts/blob/main/ofl/dmsans/OFL.txt).

Instrument Serif copyright: 2022 The Instrument Serif Project Authors. Licence: [`public/fonts/Instrument-Serif-OFL.txt`](../public/fonts/Instrument-Serif-OFL.txt), copied from [the source family folder](https://github.com/google/fonts/blob/main/ofl/instrumentserif/OFL.txt).

Load these files with `next/font/local` so rendering does not depend on a third-party font request. Register the two Instrument Serif files as separate normal and italic sources in the same family.

## Download integrity

SHA-256 hashes of the downloaded font binaries:

```text
8cd08d97e89c24d0aa92edd2f0f4c8ee6195eee9b7c9f154865a58b02f0c1c0d  dm-sans-variable.ttf
498efd461f6ddfcb7a111bf9a565709d2085d48201d501ead960d93e84ffbb88  instrument-serif-regular.ttf
08939b8bdf534afec24ae0ef5e03f948940cd9a8fe08e7fecbad040e62327385  instrument-serif-italic.ttf
```

The binaries were parsed successfully with FontTools. The DM Sans variable axes and the Instrument Serif family/style records match the entries above.
