# Installing Arch

**THIS GUIDE WILL PROBABLY NOT WORK 5 OR 6 MONTHS AFTER MAY 2023, because Arch is a constantly changing distro. DO NOT FOLLOW THIS GUIDE IF MAY 2023 WAS MORE THAN 5 OR 6 MONTHS AGO!**

**I AM NOT RESPONSIBLE FOR YOU BREAKING YOUR COMPUTER BY FOLLOWING THIS GUIDE INCORRECTLY.**

## Step 0: Preperation

You need
 - a USB drive
    - empty with at least 2GB storage space
 - modern UEFI firmware
    - this guide is not made for legacy, non-UEFI firmware, I do not know how those work.
    - I have an HP Pavilion, so my HP UEFI might look a little different from yours, but most stuff will be similar.
 - a compatible computer
    - at least 20GB storage
    - at least 2GB RAM
    - x86_64 cpu
 - *basic* linux knowledge
 - *basic* understanding of how software, files, operating systems, and partitions work
 - enough time
    - (you will NOT be able to use ANYTHING on your computer during some installation steps)
    - the whole installation process takes around 1 or 2 hours

## Step 1: Partitioning disks & fixing the EFI partition

This Arch Linux setup needs around 100MB-200MB in your EFI partition, however, *most* computers come with an EFI partition that is 100MB or less. (Windows does this cause they don't want you to have enough space to install anything other than Windows's bootloader...)

## Step 2: Getting the ISO, flashing the USB drive, & tweaking boot options
